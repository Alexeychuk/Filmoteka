const refs = {
  home_library: Array.from(document.querySelectorAll('.navbar__item')),
  addToWatched: document.querySelector('.detail__buttons--favorite'),
  addToQueue: document.querySelector('.detail__buttons--queue'),
  main: document.querySelector('.main'),
  detailsPageNone: document.querySelector('.detail'),
  filmLibraryPageNone: document.querySelector('.header-search__library'),
  thumbsNextBtn: document.querySelector('.thumbs__next-btn'),
  homePageNone: document.querySelector('.movies-wrap'),
  favoriteBtn: document.querySelector('.header-search__item'),
  filmItem: document.querySelector('.films-item'),
  logo: document.querySelector('.logo'),
};

let selectFilm;

const activeHomePage = () => {
  refs.homePageNone.classList.remove('display-section');
  refs.detailsPageNone.classList.add('display-section');
  refs.filmLibraryPageNone.classList.add('display-section');
  // refs.thumbsNextBtn.addEventListener('click', nextpage);
};

const activeLibraryPage = () => {
  refs.detailsPageNone.classList.add('display-section');
  refs.homePageNone.classList.add('display-section');
  refs.filmLibraryPageNone.classList.remove('display-section');

  // drawQueueFilmList();
  refs.favoriteBtn.classList.add('header-search__item--active');
};

const activeDetailsPage = (movieId, itsLibraryFilm) => {
  refs.homePageNone.classList.add('display-section');
  refs.filmLibraryPageNone.classList.add('display-section');

  // if(refs.filmItem ){
  //   selectFilm = {}
  //   showDetails(selectFilm)
  // }
};
// activeDetailsPage()

refs.home_library[0].addEventListener('click', activeHomePage);
refs.home_library[1].addEventListener('click', activeLibraryPage);
refs.logo.addEventListener('click', activeHomePage);
