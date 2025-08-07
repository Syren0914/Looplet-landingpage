const _env_name = "VERCEL_URL";
export const siteHost = process.env[_env_name] || "localhost:3000";
export const siteUrl = `https://${siteHost}`;
