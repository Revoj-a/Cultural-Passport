import axios, { type AxiosRequestConfig } from "axios";

export interface FetchPhotosResponse<T> {
  photos: T[];
  flags: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: "MsOKFNnwDOrFPpJul6l4cdOtc8F3lDcuWMv9mMW4OZayPEwcwZTUmJty",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchPhotosResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
