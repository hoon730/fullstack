import axiosInstance from "./axiosInstance";
import type { UserListResponse } from "@/components/users/types/user";

import type {
  User,
  CreateUserResponse,
  CheckEmailResponse,
} from "@/components/users/types/user";

//회원가입 요청
export const apiSignUp = async (user: User): Promise<CreateUserResponse> => {
  const response = await axiosInstance.post("/users", user);
  return response.data; // result, msg, data: {insertId: 회원번호}
};

// 이메일 중복 체크

export const apiCheckEmail = async (
  email: string
): Promise<CheckEmailResponse> => {
  const response = await axiosInstance.post("/users/duplex", { email });
  return response.data;
};

// 전체 회원 목록 /api/admin/users
export const apiUserList = async (): Promise<UserListResponse[]> => {
  const response = await axiosInstance.get("/admin/users");
  return response.data;
};
