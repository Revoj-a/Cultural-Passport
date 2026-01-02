import { useEffect, useState } from "react";
import {
  CanceledError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

interface FetchCountryResponse {
  [key: string]: unknown;
}

const useData = <T>(
  apiClient: AxiosInstance,
  endpoint: string,
  dataProperty: string,
  requestConfig?: AxiosRequestConfig,
  deps: unknown[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!endpoint) return;

    const controller = new AbortController();

    apiClient
      .get<FetchCountryResponse>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data[dataProperty] as T[]);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [endpoint, apiClient, dataProperty, requestConfig, deps]);
  return { data, error, isLoading };
};

export default useData;
