const api = (inProduction: boolean) => {
  const BASE_URL_LINK = inProduction
    ? "https://mploy-backend.onrender.com/api/staging/v1"
    : "http://localhost:5001/api/staging/v1";

  return {
    recruitment: BASE_URL_LINK + "/recruitment",
    upload: BASE_URL_LINK + "/upload",
  };
};

export default api;
