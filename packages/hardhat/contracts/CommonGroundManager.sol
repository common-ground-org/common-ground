//SPDX-License-Identifier: MIT
pragma solidity >=0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Project.sol";

contract CommonGroundManager is Ownable {
	// Structs

	enum ApplicationStatus {
		PENDING,
		APPROVED,
		DECLINED
	}

	struct MilestoneApplication {
		address project;
		uint256 stage;
		ApplicationStatus status;
	}

	struct ProjectSummary {
		address project;
		string description;
		string status;
	}

	// State

	mapping(uint256 => address) private _projects;
	mapping(address => uint256) private _project_ids;
	uint256 private _total_projects;

	mapping(uint256 => address) private _evaluators;
	mapping(address => uint256) private _evaluator_ids;
	uint256 private _total_evaluators;

	mapping(uint256 => MilestoneApplication) private _milestone_applications;
	mapping(address => uint256) private _project_applications;
	uint256 private _total_milestone_applications;

	// Constructor

	constructor() Ownable(msg.sender) {}

	// Functions

	function createProject(
		string memory governanceRights,
		string memory usageRights,
		string memory projectDescription,
		string memory projectName,
		uint256 targetFundingAmount,
		uint256 minContributeAmount,
		address token,
		uint256 fundingDDL,
		string[] memory milestoneDescriptions,
		uint256[] memory fundingAmounts,
		uint256[] memory deadlines
	) public returns (address) {
		_total_projects++;
		address project = address(
			new Project(
				address(this),
				governanceRights,
				usageRights,
				projectDescription,
				projectName,
				targetFundingAmount,
				minContributeAmount,
				token,
				fundingDDL,
				milestoneDescriptions,
				fundingAmounts,
				deadlines
			)
		);
		_projects[_total_projects] = project;
		_project_ids[project] = _total_projects;
		return project;
	}

	function createMilestoneApplication(address project, uint256 stage) public {
		require(_project_ids[project] > 0, "Project does not exist");
		_total_milestone_applications++;
		_milestone_applications[
			_total_milestone_applications
		] = MilestoneApplication(project, stage, ApplicationStatus.PENDING);
		_project_applications[project] = _total_milestone_applications;
	}

	function getMilestoneApplication(
		address project
	) public view returns (MilestoneApplication memory) {
		require(
			_project_applications[project] > 0,
			"Project does not have a milestone application"
		);
		return _milestone_applications[_project_applications[project]];
	}

	function getProjectAddresses() public view returns (address[] memory) {
		address[] memory addresses = new address[](_total_projects);
		for (uint256 i = 1; i <= _total_projects; i++) {
			addresses[i - 1] = _projects[i];
		}
		return addresses;
	}

	function CommonGroundInfo() public view returns (uint256, uint256) {
		return (_total_projects, _total_evaluators);
	}

	function addEvaluator(address evaluator) public onlyOwner {
		_total_evaluators++;
		_evaluators[_total_evaluators] = evaluator;
		_evaluator_ids[evaluator] = _total_evaluators;
	}

	function isEvaluator(address evaluator) public view returns (bool) {
		return _evaluator_ids[evaluator] > 0;
	}
}
