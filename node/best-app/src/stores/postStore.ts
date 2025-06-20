/*
poststore.ts: post목록 가져오기, 1건 post 조회, post 삭제 (서버 통신 로직 중심)
postFormStore.ts: post 글쓰기/글수정에 필요한 폼 읿력 상태 관리(UI상태 중심)
*/

import { create } from "zustand";
import type { Post } from "../components/posts/types/post";
import { apiFetchPostList, apiFetchPostById, apiDeletePost } from "../api/postApi";

interface PostState {
  postList: Post[]; //글목록
  totalCount: number; //총 게시글
  post: Post | null; //특정 게시글
  fetchPostList: () => Promise<void>; //글 목록 가져오기
  fetchPostById: (id: string) => Promise<void>;
  deletePost: (id: string) => Promise<boolean>; //삭제
}

export const usePostStore = create<PostState>((set) => ({
  postList: [],
  totalCount: 0,
  post: null,
  fetchPostList: async () => {
    try {
      // api호출 ==> 반환해주는 목록, 게시글 수를 set
      const data = await apiFetchPostList();

      set({
        postList: data.data,
        totalCount: data.totalCount,
      });
    } catch (error) {
      alert("목록 가져오기 싪패: " + (error as Error).message);
    }
  },
  fetchPostById: async (id) => {
    try {
      const post = await apiFetchPostById(id);
      set({ post });
    } catch (error) {
      alert("글 내용 보기 실패: " + (error as Error).message);
    }
  },
  deletePost: async (id) => {
    try {
      await apiDeletePost(id);
      set({ post: null }); // 글 내용을 null로 처리리
      return true;
    } catch (error) {
      alert("글 삭제 실패: " + (error as Error).message);
      return false;
    }
  },
}));
