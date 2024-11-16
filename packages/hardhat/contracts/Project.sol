// SPDX-License-Identifier: MIT
pragma solidity >=0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./CommonGroundManager.sol";

contract Project is Ownable {
	using SafeERC20 for IERC20;

	// Structs

	struct Milestone {
		uint256 id;
		string description;
		uint256 fundingReleaseAmount;
		uint256 deadline;
		MilestoneStatus status;
		string proofUrl;
	}

	enum MilestoneStatus {
		PENDING,
		EVALUATING,
		COMPLETED
	}

	enum ProjectStatus {
		PENDING,
		ACTIVE,
		COMPLETED,
		CANCELLED
	}

	// Modifiers

	modifier onlyEvaluator() {
		require(
			_MANAGER_CONTRACT_ADDRESS.isEvaluator(msg.sender),
			"Only evaluators can call this function"
		);
		_;
	}

	modifier onlyMilestoneStatus(MilestoneStatus status) {
		require(_status == ProjectStatus.ACTIVE, "Project is not active");
		require(
			_current_milestone_index < _MILESTONES.length,
			"No more milestones to evaluate"
		);
		require(
			_MILESTONES[_current_milestone_index].status == status,
			"Milestone is not in the correct status"
		);
		_;
	}

	modifier onlyProjectStatus(ProjectStatus status) {
		require(_status == status, "Project is not in the correct status");
		_;
	}

	// Project information

	string private _GOVERNANCE_RIGHTS;
	string private _USAGE_RIGHTS;
	string private _PROJECT_DESCRIPTION;
	bytes32 private immutable _PROJECT_NAME;
	Milestone[] private _MILESTONES;
	uint256 private immutable _TARGET_FUNDING_AMOUNT;
	uint256 private immutable _MIN_CONTRIBUTE_AMOUNT;
	IERC20 private immutable _TOKEN;
	CommonGroundManager private immutable _MANAGER_CONTRACT_ADDRESS;

	// State

	mapping(address => uint256) private _funding_amounts;
	uint256 private _current_funding_amount;
	ProjectStatus private _status;
	uint256 private _current_milestone_index;

	// Constructor

	constructor(
		address managerContractAddress,
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
	) Ownable(msg.sender) {
		require(
			milestoneDescriptions.length == fundingAmounts.length &&
				fundingAmounts.length == deadlines.length,
			"Milestone arrays must have equal length"
		);

		_GOVERNANCE_RIGHTS = governanceRights;
		_USAGE_RIGHTS = usageRights;
		_PROJECT_DESCRIPTION = projectDescription;
		_PROJECT_NAME = projectName;
		_TARGET_FUNDING_AMOUNT = targetFundingAmount;
		_MIN_CONTRIBUTE_AMOUNT = minContributeAmount;
		_TOKEN = IERC20(token);
		_MANAGER_CONTRACT_ADDRESS = CommonGroundManager(managerContractAddress);

		// Initialize milestones with user provided values
		for (uint256 i = 0; i < milestoneDescriptions.length; i++) {
			_MILESTONES.push(
				Milestone({
					id: i,
					description: milestoneDescriptions[i],
					fundingReleaseAmount: fundingAmounts[i],
					deadline: deadlines[i],
					status: MilestoneStatus.PENDING,
					proofUrl: ""
				})
			);
		}
		_current_milestone_index = 0;
		_status = ProjectStatus.ACTIVE;
	}

	// Functions

	function projectInfo()
		public
		view
		returns (
			string memory governanceRights,
			string memory usageRights, 
			string memory projectDescription,
			bytes32 projectName,
			uint256 targetFundingAmount,
			uint256 minContributeAmount,
			uint256 currentFundingAmount,
			string memory status,
			uint256 currentMilestoneIndex,
			string memory currentMilestoneStatus
		)
	{
		return (
			_GOVERNANCE_RIGHTS,
			_USAGE_RIGHTS,
			_PROJECT_DESCRIPTION,
			_PROJECT_NAME,
			_TARGET_FUNDING_AMOUNT,
			_MIN_CONTRIBUTE_AMOUNT,
			_current_funding_amount,
			showProjectStatus(_status),
			_current_milestone_index,
			showMilestoneStatus(_MILESTONES[_current_milestone_index].status)
		);
	}

	function contribute(uint256 amount)
		public
		onlyProjectStatus(ProjectStatus.ACTIVE)
	{
		require(
			amount > _MIN_CONTRIBUTE_AMOUNT,
			"Amount must be greater than minimum contribute amount"
		);

		_funding_amounts[msg.sender] += amount;
		_current_funding_amount += amount;
	}

	// Helper functions

	function showMilestoneStatus(
		MilestoneStatus status
	) public pure returns (string memory) {
		if (status == MilestoneStatus.PENDING) {
			return "pending";
		} else if (status == MilestoneStatus.EVALUATING) {
			return "evaluating";
		} else if (status == MilestoneStatus.COMPLETED) {
			return "completed";
		}

		return "unknown";
	}

	function showProjectStatus(
		ProjectStatus status
	) public pure returns (string memory) {
		if (status == ProjectStatus.PENDING) {
			return "pending";
		} else if (status == ProjectStatus.ACTIVE) {
			return "active";
		} else if (status == ProjectStatus.COMPLETED) {
			return "completed";
		} else if (status == ProjectStatus.CANCELLED) {
			return "cancelled";
		}

		return "unknown";
	}

	function transferTokens(address to, uint256 amount) internal {
		_TOKEN.safeTransfer(to, amount);
	}

	function transferTokensFrom(
		address from,
		address to,
		uint256 amount
	) internal {
		_TOKEN.safeTransferFrom(from, to, amount);
	}

	function transferTokensToThisFrom(address from, uint256 amount) internal {
		_TOKEN.safeTransferFrom(from, address(this), amount);
	}
}
