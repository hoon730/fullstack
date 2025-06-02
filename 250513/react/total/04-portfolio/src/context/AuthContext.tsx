import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// context 저장될 값들의 타입 정의하기
interface AuthContextType {
  isLoggedIn: boolean;
  userId: string | null;
  login: (email: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

// 자식요소 전달되는 요소 타입 선언하기

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!cookies.user);
  const [userId, setUserId] = useState<string | null>(cookies.user ? "" : null);

  useEffect(() => {
    if (cookies.user) {
      setIsLoggedIn(true);
      setUserId(cookies.user);
    } else {
      setIsLoggedIn(false);
      setUserId(null);
    }
  }, [cookies.user]);

  const login = (email: string) => {
    const expireDate = new Date(new Date().getTime() + 2 * 60 * 1000);
    setCookies("user", email, {
      path: "/",
      expires: expireDate,
    });
    setIsLoggedIn(true);
    setUserId(email);
  };

  const logout = () => {
    removeCookies("user", { path: "/" });
    setIsLoggedIn(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//useContext가 ull인 경우 에러가 발생한다
// useContext(AuthContext)를 직접 쓰지 않고 재선언해서 다시 사용한다

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("에러");

  return context;
};
