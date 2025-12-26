export const configuration = {
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};
