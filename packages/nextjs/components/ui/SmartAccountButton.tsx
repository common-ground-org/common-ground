import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
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
      console.error("failed to create smart account:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {!accountInfo ? (
              <button className="btn btn-primary" onClick={handleCreateAccount} disabled={loading}>
                {loading ? "creating..." : "create smartAccount"}
              </button>
            ) : (
              <p>account</p>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>smartAccountAddress: {accountInfo?.smartAccountAddress}</p>
            <p>sessionKeyAddress: {accountInfo?.sessionKeyAddress}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
