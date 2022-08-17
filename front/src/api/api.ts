import { Response } from "../common/types/interface";

const baseUrl = String(process.env.REACT_APP_SERVER_URL);

const get = async <T extends Response>(endpoint: string) => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const result: T = await res.json();

  if (result.statusCode >= 400) {
    alert(result.message);
    throw new Error(result.error);
  }

  return result;
};

const post = async <T extends Response, U>(endpoint: string, data: U) => {
  const url = baseUrl + endpoint;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const result: T = await res.json();

  if (result.statusCode >= 400) {
    alert(result.message);
    throw new Error(result.error);
  }

  return result;
};

export { post, get };
