import { envConfig } from "@/lib/constants";

const baseUrl = envConfig.NEXT_PUBLIC_BASE_API_URL;

export const Urls = {
  auth: {
    login: `${baseUrl}/api/identity/login`,
  },
};
