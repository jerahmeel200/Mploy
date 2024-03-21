import api from "./api";

const inProduction = process.env.NODE_ENV === "development" ? false : true;

const env = {
  BASE_URL: api(inProduction),
};

export default env;
