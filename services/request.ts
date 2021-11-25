import axios from "axios";

export interface BaseRes {
  stat: string;
  result?: any;
  data?: any;
  msg?: any;
}

const instance = axios.create({
  baseURL: process.env.BACKEND || "",
  validateStatus: (status) => {
    return status < 500;
  },
});


export function post<T>(url: string, data: any = {}, token?: string) {
  return instance.post<T>(url, data, {
    headers: token
      ? {
          cookie: "token=" + token,
        }
      : {},
  });
}
