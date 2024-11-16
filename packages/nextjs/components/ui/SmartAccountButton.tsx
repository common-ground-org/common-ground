import { useState } from "react";
import { useSmartAccount } from "~~/services/biconomy/smartAccountClient";

export const SmartAccountButton = () => {
  const { createSmartAccount } = useSmartAccount();
  const [loading, setLoading] = useState(false);
  const [accountInfo, setAccountInfo] = useState<{
    smartAccountAddress: string;
    sessionKeyAddress: string;
  } | null>(null);

  const handleCreateAccount = async () => {
    try {
      setLoading(true);
      const account = await createSmartAccount();
      setAccountInfo({
        smartAccountAddress: account.smartAccountAddress,
        sessionKeyAddress: account.sessionKeyAddress,
      });
    } catch (error) {
      console.error("创建智能账户失败:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <button className="btn btn-primary" onClick={handleCreateAccount} disabled={loading}>
        {loading ? "creating..." : "create smartAccount"}
      </button>

      {accountInfo && (
        <div className="mt-4">
          <p>smartAccountAddressß: {accountInfo.smartAccountAddress}</p>
          <p>sessionKeyAddress: {accountInfo.sessionKeyAddress}</p>
        </div>
      )}
    </div>
  );
};
