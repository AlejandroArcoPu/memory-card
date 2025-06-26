import { generateRandom } from "../utils";
export const getRandom = async (limit) => {
  const data = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=ghkEhGdSwDTAnAbVImwJxu224VDL3Lps&limit=${limit}&offset=${generateRandom(
      100
    )}&rating=g&bundle=messaging_non_clips`
  );

  return await data.json();
};
