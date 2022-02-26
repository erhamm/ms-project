import request from "../utils/request";
//登录接口
export function loginApi(params) {
  return request({
    url: "/api/login",
    method: "post",
    data: params,
  });
}
