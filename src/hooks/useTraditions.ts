import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Photo {
  id: number;
  url: string;
  src: { large: string };
}

interface FetchTraditionResponse {
  photos: Photo[];
}

const useTraditions = () => {
  const [traditions, setTraditions] = useState<Photo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchTraditionResponse>("/search?query=Traditions&per_page=18", {
        signal: controller.signal,
      })
      .then((res) => setTraditions(res.data.photos))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { traditions, error };
};

export default useTraditions;
