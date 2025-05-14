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
  for (const id in genre) {
    const name = genre[id];
    const button = document.createElement("button");
    button.textContent = name;
    button.setAttribute("data-genre", id);
    genreButtons.appendChild(button);
  }
  const buttons = genreButtons.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedGenre = parseInt(btn.getAttribute("data-genre"));
      showMovie();
    });
  });
}

// 장르 가져오기
async function fetchGenre() {
  await fetch(GENRE_URL)
    .then((res) => res.json())
    .then((data) => {
      data.genres.forEach((ele) => {
        genre[ele.id] = ele.name;
      });
      showButtons();
    });
}

fetchGenre();

// 영화 보여주기
function showMovie() {
  const searchText = searchInput.value.toLowerCase();
  //화면 비우기
  movieList.innerHTML = "";

  // 장르 체크하며 필터
  const filterMovies = movies.filter((movie) => {
    const matchGenre =
      selectedGenre === 0 || movie.genre_ids.includes(selectedGenre);
    const matchSearch = movie.title.toLowerCase().includes(searchText);
    return matchGenre && matchSearch;
  });

  console.log(filterMovies);

  movies.forEach((movie) => {
    const li = document.createElement("li");
    const imgSrc = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : `https://via.placeholder.com/500x700?text=No+Image`;
    li.innerHTML = `
    <div class=posterImg><img src="${imgSrc}" alt="${movie.poster_path}" /></div>
    <div class=title><strong>${movie.title}</strong><span>${movie.vote_average}</span></div>`;
    movieList.appendChild(li);
  });
}

// 영화 가져오기
async function fetchMovie() {
  try {
    await fetch(POPULAR_URL)
      .then((response) => response.json())
      .then((data) => {
        movies = data.results;
        showMovie();
      });
  } catch (error) {}
}
// input에 글자를 입력하면 입력한 문자를 포함하는 내용을 필터하여 영화 보여주기
searchInput.addEventListener("input", () => showMovie);

fetchMovie();
fetchGenre();
