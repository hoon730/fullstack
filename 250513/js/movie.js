// API 키 저장
const API_KEY = "46d1f10a8f0adcef07e6187ff984064a";
// 불러오는 주소
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko-KR`;

// 인기순 영화
const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

// DOM
const searchInput = document.querySelector("#searchInput");
const genreButtons = document.querySelector(".genreButtons");
const movieList = document.querySelector(".movie-list");

// 데이터 저장 변수
// 영화목록, 장르정보를 저장할 변수 선언
let movies = [];
let genre = {};
let selectedGenre = 0;

// 장르 보여주기
function showButtons() {
  for (const id in genres) {
    const name = genres[id];
    const button = document.createElement("button");
    button.textContent = name;
    button.setAttribute(`data-genre`, id);
    genreButtons.appendChild(button);
  }
  const buttons = genreButtons.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => btn.classList.remove("active"));
      btn.classList.add("active");
      let selectedGenre = parseInt(btn.getAttribute("data-genre"));
    });
  });
}

// 장르 가져오기
async function fetchGenre() {
  await fetch(GENRE_URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
  data.genre.forEach((ele) => {
    genre[ele.id] = ele.name;
  });
  showButtons();
}

fetchGenre();

// 영화 보여주기
// 영화 가져오기
