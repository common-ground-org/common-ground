//SPDX-License-Identifier: MIT
pragma solidity >=0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Project.sol";

contract CommonGroundManager is Ownable {
	// State

	mapping(uint256 => address) private _projects;
	mapping(address => uint256) private _project_ids;
	uint256 private _total_projects;

	mapping(uint256 => address) private _evaluators;
	mapping(address => uint256) private _evaluator_ids;
	uint256 private _total_evaluators;

	// Constructor

	constructor() Ownable(msg.sender) {}

	// Functions

	function createProject(
		string memory governanceRights,
		string memory usageRights,
		string memory projectDescription,
		bytes32 projectName,
		uint256 targetFundingAmount,
		uint256 minContributeAmount,
		address token,
		string[] memory milestoneDescriptions,
		uint256[] memory fundingAmounts,
		uint256[] memory deadlines
	) public onlyOwner returns (address) {
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
				milestoneDescriptions,
				fundingAmounts,
				deadlines
			)
		);
		_projects[_total_projects] = project;
		_project_ids[project] = _total_projects;
		return project;
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
