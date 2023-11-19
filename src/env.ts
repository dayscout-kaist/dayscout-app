export const env = {
  API_URL:
    process.env.EXPO_PUBLIC_API_URL || "https://dayscout.sparcsandbox.com",
} as const;
