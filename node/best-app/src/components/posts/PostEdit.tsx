import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../../stores/postStore";
import { useEffect, type ChangeEvent, type FormEvent } from "react";
import { usePostFormStore } from "../../stores/postFormStore";
import { apiUpdatePost } from "../../api/postApi";

const PostEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const post = usePostStore((s) => s.post);
  const fetchPostById = usePostStore((s) => s.fetchPostById);
  const { resetForm, formData, setFormData } = usePostFormStore();

  const fetchAndSet = async () => {
    if (id) {
      await fetchPostById(id); // 이 안에서 post state가 setting된다
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 유효성 체크
    const { title, content } = formData;
    if (!title.trim()) {
      alert("제목을 입력하세요");
      return;
    }
    if (!content.trim()) {
      alert("내용을 입력하세요");
    }
    // 파일업로드시는 FormData객체에 사용자가 입력한 값들을 넣어 전송
    try {
      const { writer, title, content, newFile } = formData;
      const data = new FormData();
      data.append("writer", writer);
      data.append("title", title);
      data.append("content", content);
      if (newFile) {
        data.append("file", newFile);
      }
      //    PUT / api/posts/100 => 수정처리 (put / patch)
      if (id) {
        await apiUpdatePost(data, id);
      }
      alert("수정 성공");
      navigate("/posts");
    } catch (error: any) {
      console.error(error);
      alert("수정 실패: " + error.message);
    }
  };

  const handleReset = () => {
    resetForm();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // 파일 첨부를 했다면
      setFormData({
        newFile: e.target.files[0],
      });
    }
  };

  useEffect(() => {
    fetchAndSet(); // mount될 때 fetchAndSet()호출
    return () => resetForm(); // unmount될 때 자동으로 호출되는 cleanup 함수수
  }, [id]);

  useEffect(() => {
    if (post) {
      //DB에서 가져온 값을 post가 가지고 있음
      setFormData({
        writer: post.writer || "",
        title: post.title || "",
        content: post.content || "",
        file: post.file || "",
        newFile: null,
      });
    }
  }, [post]);

  return (
    <div className="row my-1">
      <div className="col-md-8 mx-auto p-3">
        <h1 className="text-center my-5">게시글 수정</h1>

        <form>
          {/* 제목 */}
          <div className="mb-3">
            <label className="form-label">제목</label>
            <input
              name="title"
              className="form-control my-2"
              placeholder="제목을 입력하세요"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* 작성자 */}
          <div className="mb-3">
            <label className="form-label">작성자</label>
            <input
              //   name="writer"
              className="form-control my-2"
              placeholder="작성자 이름"
              value={formData.writer}
              onChange={handleChange}
            />
          </div>

          {/* 내용 */}
          <div className="mb-3">
            <label className="form-label">내용</label>
            <textarea
              name="content"
              className="form-control my-2"
              rows={6}
              placeholder="내용을 입력하세요"
              value={formData.content}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* 첨부파일 */}
          <div className="mb-3">
            <label className="form-label">첨부파일</label>
            <input
              name="file"
              className="form-control"
              type="file"
              onChange={handleFileChange}
            />
            {formData.file && (
              <div className="mt-2 text-muted">
                <img
                  src={`http://localhost:7777/uploads/${formData.file}`}
                  alt={formData.file}
                  style={{ width: "120px" }}
                />
                <div>현재 파일: {formData.file}</div>
              </div>
            )}
          </div>

          {/* 버튼들 */}
          <div className="text-center">
            <button
              className="btn btn-primary mx-1 px-3 btn-sm"
              onClick={handleSubmit}
            >
              글수정
            </button>
            <button
              className="btn btn-warning mx-1 px-3 btn-sm"
              onClick={handleReset}
            >
              다시쓰기
            </button>
            <button
              className="btn btn-secondary mx-1 px-3 btn-sm"
              onClick={() => {
                navigate("/posts");
              }}
            >
              글 목록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEdit;
