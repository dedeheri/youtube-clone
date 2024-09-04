import { useCallback, useEffect, useState } from "react";

export const getFilter = async () => {
  const [result, setResult] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const url = "https://yt-api.p.rapidapi.com/home";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d280df9834mshbccf37a598cb8a8p1952eejsn29939f952305",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const f = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();

        setResult(result?.filters);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    f();
  }, []);

  return { result, loading };
};
