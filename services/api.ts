import { BaseRes, post } from "./request";

export async function thoughtList() {
  let result = await post<BaseRes>('/api/v1/thoughts/list')
  return result.data
}

export async function openSourceList(){
  let result = await post<BaseRes>('/api/v1/thoughts/list')
  return result.data
}

export async function acticleList() {
  let result = await post<BaseRes>('/api/v1/acticle/list')
  return result.data
}

export async function upload(file: File, username: string) {
  let result = await post<BaseRes>(
    "api/v1/file/upload?" +
      "name=" +
      encodeURIComponent(file.name) +
      "&username=" +
      username,
    file
  );
  return result.data;
}


export async function login(
  username?: string,
  password?: string,
  token?: string
) {
  let result = await post<BaseRes>(
    "/api/v1/user/login",
    {
      username,
      password,
    },
    token
  );
  return result.data;
}
