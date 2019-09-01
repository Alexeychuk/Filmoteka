const refs = {
  home_library: Array.from(document.querySelectorAll('.navbar__item')),
  addToWatched: document.querySelector('.detail__buttons--favorite'),
  addToQueue: document.querySelector('.detail__buttons--queue'),
  main: document.querySelector('.main'),
  detailsPageNone: document.querySelector('.detail'),
  filmLibraryPageNone: document.querySelector('.header-search__library'),
  thumbsNextBtn: document.querySelector('.thumbs__next-btn'),
  homePageNone: document.querySelector('.movies-wrap'),
  favoriteBtn: Array.from(document.querySelectorAll('.header-search__item'))[0],
  queueBtn: Array.from(document.querySelectorAll('.header-search__item'))[1],
  filmItem: document.querySelector('.films-item'),
  logo: document.querySelector('.logo'),
  navbarHome: document.querySelector('#home'),
  navbarLibrary: document.querySelector('#library'),

  formWrap: document.querySelector('.form-wrap'),
  thumbs: document.querySelector('.thumbs'),
  movieWrap: document.querySelector('.movies-wrap')
};

let selectFilm;

const activeHomePage = () => {
  refs.homePageNone.classList.remove('display-section');
  refs.detailsPageNone.classList.add('display-section');
  refs.filmLibraryPageNone.classList.add('display-section');
  thumbs.addEventListener('click', plaginationNavigation);
  refs.navbarHome.classList.add('navbar__item--active');
  refs.navbarLibrary.classList.remove('navbar__item--active')

  refs.formWrap.classList.remove('display-section');
  refs.thumbs.classList.remove('display-section');
  refs.movieWrap.classList.remove('display-section')
};

const activeLibraryPage = () => {
  refs.detailsPageNone.classList.add('display-section');
  refs.homePageNone.classList.add('display-section');
  refs.filmLibraryPageNone.classList.remove('display-section');

  refs.navbarHome.classList.remove('navbar__item--active');
  refs.navbarLibrary.classList.add('navbar__item--active')
  // drawQueueFilmList();

  refs.queueBtn.classList.add('header-search__item--active');

  // refs.favoriteBtn.addEventListener('click', drawWatchedFilmList);

  
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
activeHomePage();


refs.home_library[0].addEventListener('click', activeHomePage);
refs.home_library[1].addEventListener('click', activeLibraryPage);
refs.logo.addEventListener('click', activeHomePage);
