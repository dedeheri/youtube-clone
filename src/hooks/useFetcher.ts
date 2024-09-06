const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
};

export const fetcher = (url: string) => {
  return fetch(url, options).then((res) => res.json());
};
