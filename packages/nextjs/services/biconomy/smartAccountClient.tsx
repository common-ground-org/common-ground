import { biconomyConfig } from "@/config/biconnomy";
import {
  PaymasterMode,
  Policy,
  Rule,
  createSession,
  createSessionKeyEOA,
  createSmartAccountClient,
} from "@biconomy/account";
import { polygonAmoy as chain } from "viem/chains";
import { useWalletClient } from "wagmi";

export const useSmartAccount = () => {
  const { data: walletClient } = useWalletClient();

  const createSmartAccount = async () => {
    if (!walletClient) {
      throw new Error("Wallet not connected");
    }

    const nftAddress = "0x1758f42Af7026fBbB559Dc60EcE0De3ef81f665e";
    const withSponsorship = {
      paymasterServiceData: { mode: PaymasterMode.SPONSORED },
    };

    const params = {
      signer: walletClient,
      biconomyPaymasterApiKey: biconomyConfig.biconomyPaymasterApiKey,
      bundlerUrl: biconomyConfig.bundlerUrl,
    };
    console.log(biconomyConfig.bundlerUrl);
    const usersSmartAccount = await createSmartAccountClient(params);

    const smartAccountAddress = await usersSmartAccount.getAccountAddress();
    console.log(smartAccountAddress);
    const { sessionKeyAddress, sessionStorageClient } = await createSessionKeyEOA(usersSmartAccount, chain);

    const rules: Rule[] = [
      {
        /** The index of the param from the selected contract function upon which the condition will be applied */
        offset: 0,
        /**
         * Conditions:
         *
         * 0 - Equal
         * 1 - Less than or equal
         * 2 - Less than
         * 3 - Greater than or equal
         * 4 - Greater than
         * 5 - Not equal
         */
        condition: 0,
        /** The value to compare against */
        referenceValue: smartAccountAddress,
      },
    ];

    /** The policy is made up of a list of rules applied to the contract method with and interval */
    const policy: Policy[] = [
      {
        /** The address of the sessionKey upon which the policy is to be imparted */
        sessionKeyAddress,
        /** The address of the contract to be included in the policy */
        contractAddress: nftAddress,
        /** The specific function selector from the contract to be included in the policy */
        functionSelector: "safeMint(address)",
        /** The list of rules which make up the policy */
        rules,
        /** The time interval within which the session is valid. Setting both to 0 will keep a session alive indefinitely */
        interval: {
          validUntil: 0,
          validAfter: 0,
        },
        /** The maximum value that can be transferred in a single transaction */
        valueLimit: 0n,
      },
    ];

    const { wait, session } = await createSession(usersSmartAccount, policy, sessionStorageClient, withSponsorship);

    const {
      receipt: { transactionHash },
      success,
    } = await wait();

    return {
      smartAccount: usersSmartAccount,
      smartAccountAddress,
      sessionKeyAddress,
      sessionStorageClient,
    };
  };

  return { createSmartAccount };
};
