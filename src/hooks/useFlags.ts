import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Photo {
  id: number;
  url: string;
  src?: { medium: string };
}

interface FetchFlagResponse {
  photos: Photo[];
}

const useFlags = () => {
  const [flags, setFlags] = useState<Photo[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchFlagResponse>("/search?query=Flags&per_page=10", {
        signal: controller.signal,
      })
      .then((res) => {
        setFlags(res.data.photos);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { flags, error, isLoading };
};

export default useFlags;
