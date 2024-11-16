export const biconomyConfig = {
  biconomyPaymasterApiKey: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_API_KEY || "",
  bundlerUrl: process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL || "",
} as const;
