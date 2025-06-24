import { useEffect, useState } from "react";
import type { User, UserListResponse } from "./types/user";
import { apiUserList } from "../../api/userApi";

export default function UserList() {
  const [users, setUsers] = useState<UserListResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // 인증 사용자, 인가 사용자(권한: ADMIN) 여부를 검사하는 로직

    // 관리자일 경우 사용자 목록 가져오기 - API 요청
    const fetchUsers = async () => {
      try {
        const res = await apiUserList();
        setUsers(res);
      } catch (error: any) {
        alert("회원목록 조회 중 에러 발생 " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div>
        <h4 className="text-center my-4">Loading ...</h4>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">회원 목록 [Admin Page - 관리자 전용]</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>회원ID</th>
            <th>이 름</th>
            <th>이메일</th>
            <th>ROLE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.indate}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
