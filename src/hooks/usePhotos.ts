import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  src: { large: string };
}

interface FetchPhotoResponse {
  photos: Photo[];
}

const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchPhotoResponse>("/search?query=Culture&per_page=1", {
        signal: controller.signal,
      })
      .then((res) => setPhotos(res.data.photos))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { photos, error };
};

export default usePhotos;
