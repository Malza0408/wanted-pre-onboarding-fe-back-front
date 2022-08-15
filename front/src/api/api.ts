import { Response } from "../common/types/interface";

const baseUrl = process.env.REACT_APP_SERVER_URL;

const post = async <T extends Response, U>(endpoint: string, data: U) => {
  const url = baseUrl + endpoint;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result: T = await res.json();
  if (result.statusCode >= 400) {
    alert(result.message);
    throw new Error(result.message);
  }

  return result;
};

export { post };
