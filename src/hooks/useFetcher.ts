// export const url = "https://yt-api.p.rapidapi.com/home";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "1e085dfea5msh002a696f0050304p1c09e9jsnf4a738ae2a70",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
};

export const fetcher = (url: string) => {
  console.log("key", process.env.RAPID_API_KEY as string);
  return fetch(url, options).then((res) => res.json());
};
