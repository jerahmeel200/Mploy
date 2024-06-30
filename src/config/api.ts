const api = (inProduction: boolean) => {
  const BASE_URL_LINK = process.env.BACKEND_API_URL;

  return {
    recruitment: BASE_URL_LINK + "/recruitment",
    upload: BASE_URL_LINK + "/upload",
    website: BASE_URL_LINK + "/website",
  };
};

export default api;
