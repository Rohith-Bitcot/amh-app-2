import { config } from "../config";
import authInterceptor from "./interceptors/auth-interceptors";
import serverErrorHandler from "./interceptors/server-error-handler";
import successHandler from "./interceptors/success-handler";
import axios from "axios";

const instance = axios.create({
  baseURL: config.API_URL,
});

instance.interceptors.request.use(authInterceptor, (error) => error);
instance.interceptors.response.use(successHandler, (error) =>
  serverErrorHandler(error),
);

export default instance;
