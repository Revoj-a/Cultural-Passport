import { useQuery } from "@tanstack/react-query";
import translateClient from "../services/translate-client";
import ms from "ms";

interface TranslationResponse {
  translatedText: string;
}

const useTranslate = (text: string, targetLang: string) =>
  useQuery({
    queryKey: ["translate", text, targetLang],
    queryFn: () =>
      translateClient
        .post<TranslationResponse>("/translate", {
          q: text,
          source: "auto",
          target: targetLang,
          format: "text",
        })
        .then((res) => res.data),

    enabled: !!text && !!targetLang,
    staleTime: ms("24h"),
    keepPreviousData: true,
  });

export default useTranslate;
