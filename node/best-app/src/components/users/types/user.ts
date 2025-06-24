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

// 회원가입 성공 시 payload
export interface CreateUserData {
  insertId: number;
}

// 회원가입 응답
export type CreateUserResponse = ApiResponse<CreateUserData>;

export interface CheckEmailResponse {
  result: "ok" | "duplex";
  message: string;
}

export interface UserListResponse {
  id: number;
  name: string;
  email: string;
  role: Role | string;
  indate: string;
}
