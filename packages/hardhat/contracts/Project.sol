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
		uint256 releasePercentage;
		uint256 deadline;
		MilestoneStatus status;
		string proofUrl;
	}

    // PENDING is the default status.
    // When the owner apply to evaluate, the status is set to EVALUATING.
    // If the application is approved, the status is set to COMPLETED.
    // If the application is declined, the status is set back to PENDING.
	enum MilestoneStatus {
		PENDING,
		EVALUATING,
		COMPLETED
	}

	// PENDING is the default status.
	// When the project is created, it is FUNDING.
	// When the total funding amount is reached, the project status is set to ACTIVE.
	// When all milestones are completed, the project status is set to COMPLETED.
	// Evaluators can cancel the project, setting the status to CANCELLED.
	enum ProjectStatus {
		PENDING,
		FUNDING,
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
	string private _PROJECT_NAME;
    uint256 private immutable _FUNDING_DDL;
	Milestone[] private _MILESTONES;
	uint256 private immutable _TARGET_FUNDING_AMOUNT;
	uint256 private immutable _MIN_CONTRIBUTE_AMOUNT;
	// IERC20 private immutable _TOKEN;
	address private immutable _TOKEN_ADDRESS;
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
		string memory projectName,
		uint256 targetFundingAmount,
		uint256 minContributeAmount,
		address token,
        uint256 fundingDDL,
		string[] memory milestoneDescriptions,
		uint256[] memory releasePercentages,
		uint256[] memory deadlines
	) Ownable(msg.sender) {
		require(
			milestoneDescriptions.length == releasePercentages.length &&
				releasePercentages.length == deadlines.length,
			"Milestone arrays must have equal length"
		);

		// Check percentage sum
		uint256 releasePercentageSum = 0;
		for (uint256 i = 0; i < releasePercentages.length; i++) {
			releasePercentageSum += releasePercentages[i];
		}
		require(
			releasePercentageSum == 100,
			"Release percentages must sum to 100"
		);

		_GOVERNANCE_RIGHTS = governanceRights;
		_USAGE_RIGHTS = usageRights;
		_PROJECT_DESCRIPTION = projectDescription;
		_PROJECT_NAME = projectName;
		_TARGET_FUNDING_AMOUNT = targetFundingAmount;
		_MIN_CONTRIBUTE_AMOUNT = minContributeAmount;
        _FUNDING_DDL = fundingDDL;
		// _TOKEN = IERC20(token);
		_TOKEN_ADDRESS = token;
		_MANAGER_CONTRACT_ADDRESS = CommonGroundManager(managerContractAddress);

		// Initialize milestones with user provided values
		for (uint256 i = 0; i < milestoneDescriptions.length; i++) {
			_MILESTONES.push(
				Milestone({
					id: i,
					description: milestoneDescriptions[i],
					releasePercentage: releasePercentages[i],
					deadline: deadlines[i],
					status: MilestoneStatus.PENDING,
					proofUrl: ""
				})
			);
		}
		_current_milestone_index = 0;
		_status = ProjectStatus.FUNDING;
	}

	// Functions

	function projectInfo()
		public
		view
		returns (
			string memory governanceRights,
			string memory usageRights,
			string memory projectDescription,
			string memory projectName,
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

	function contribute(
		uint256 amount
	) public onlyProjectStatus(ProjectStatus.FUNDING) payable {
		require(
			amount > _MIN_CONTRIBUTE_AMOUNT,
			"Amount must be greater than minimum contribute amount"
		);

		require(msg.value == amount, "Amount must be equal to the contribution");

		transferTokensToThisFrom(msg.sender, amount);

		_funding_amounts[msg.sender] += amount;
		_current_funding_amount += amount;

		if (_current_funding_amount >= _TARGET_FUNDING_AMOUNT) {
			_status = ProjectStatus.ACTIVE;
		}
	}

	function applyForMilestone(
        string memory proofUrl
    )
		public
		onlyOwner
		onlyProjectStatus(ProjectStatus.ACTIVE)
	{
		// _MANAGER_CONTRACT_ADDRESS.createMilestoneApplication(address(this), _current_milestone_index);
		require(
			_current_milestone_index < _MILESTONES.length,
			"No more milestones to apply for"
		);
		_MILESTONES[_current_milestone_index].status = MilestoneStatus.EVALUATING;
		_MILESTONES[_current_milestone_index].proofUrl = proofUrl;
	}

	function reviewMilestoneApplication(
		bool confirm
	) public onlyEvaluator onlyMilestoneStatus(MilestoneStatus.EVALUATING) {
		if (confirm) {
			_MILESTONES[_current_milestone_index].status = MilestoneStatus
				.COMPLETED;
		} else {
			_MILESTONES[_current_milestone_index].status = MilestoneStatus
				.PENDING;
		}
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
		} else if (status == ProjectStatus.FUNDING) {
			return "funding";
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
		// _TOKEN.safeTransfer(to, amount);
	}

	function transferTokensFrom(
		address from,
		address to,
		uint256 amount
	) internal {
		// _TOKEN.safeTransferFrom(from, to, amount);
	}

	function transferTokensToThisFrom(address from, uint256 amount) internal {
		// _TOKEN.safeTransferFrom(from, address(this), amount);
	}

    function refundAll() internal {
        // _TOKEN.safeTransfer(msg.sender, _funding_amounts[msg.sender]);
    }
}
