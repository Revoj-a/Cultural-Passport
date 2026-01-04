/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import {
  CanceledError,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

export interface FetchResponse {
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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (
      !endpoint ||
      endpoint.endsWith("query") ||
      endpoint.endsWith("/name") ||
      endpoint.endsWith("/name")
    )
      return;

    const queryValue = deps[0];
    if (typeof queryValue === "string" && queryValue.trim().length === 0)
      return;

    const controller = new AbortController();

    apiClient
      .get<FetchResponse>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        const result = dataProperty
          ? (res.data[dataProperty] as T[])
          : (res.data as unknown as T[]);
        setData(result || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [endpoint, ...deps]);
  return { data, error, isLoading };
};

export default useData;
