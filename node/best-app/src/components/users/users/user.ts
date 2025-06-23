export interface User {
  id?: number;
  name: string;
  email: string;
  passwd: string;
  role: Role;
}

export type Role = "USER" | "ADMIN";

// 공통 api응답
export interface ApiResponse<T = undefined> {
  result: "success" | "fail";
  message: string;
  data?: T; // 성공 시에만 존재재
}
