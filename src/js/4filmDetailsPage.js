const addToWatchedBtn = document.querySelector('.detail__buttons--favorite');
const addToQueueBtn = document.querySelector('.detail__buttons--queue');

const addDeleteFromWatched = document.querySelector('.videoBtn');
const addDeleteFromQueue = document.querySelector('.calendarBtn');

const imgOfFilm = document.querySelector('.detail__img--item');
const titleOfFilm = document.querySelector('.detail__description--title');
const voteOfFilm = document.querySelector('.detail__votes--value');
const popularityOfFilm = document.querySelector('.detail__popularity--value');
const originalNameOfFilm = document.querySelector('.detail__name--value');
const genreOfFilm = document.querySelector('.detail__genre--value');
const aboutFilm = document.querySelector('.detail__description--text');

let filmsQueueStorage = localStorage.getItem('filmsQueue');
let filmsWatchedStorage = localStorage.getItem('filmsWatched');


function monitorButtonStatusText() {
  addToQueueBtn.textContent = 'add to queue';
  addToQueueBtn.classList.remove('detail__button--active');
  addToWatchedBtn.textContent = 'add to library';
  addToWatchedBtn.classList.remove('detail__button--active');

  if (localStorage.getItem('filmsQueue')) {
    if (
      JSON.parse(filmsQueueStorage).find(
        obj => obj.id === Number(selectFilm.id),
      )
    ) {
      addToQueueBtn.classList.add('detail__button--active');
      addToQueueBtn.textContent = 'delete from queue';
      //console.log('film in queue');
    } else {
      addToQueueBtn.classList.remove('detail__button--active');
      addToQueueBtn.textContent = 'add to queue';
    }

    if (
      JSON.parse(filmsWatchedStorage).find(
        obj => obj.id === Number(selectFilm.id),
      )
    ) {
      addToWatchedBtn.classList.add('detail__button--active');
      addToWatchedBtn.textContent = 'delete from favorite';
      //console.log('film in library');
    } else {
      addToWatchedBtn.classList.remove('detail__button--active');
      addToWatchedBtn.textContent = 'add to library';
    }
  }
}

function toggleToQueue() {
  const localQueue = JSON.parse(localStorage.getItem('filmsQueue'));
  const arrayOfQueue = [];

  if (localQueue) {
    arrayOfQueue.push(...localQueue);
  }

  const dublicateMovie = arrayOfQueue.find(el => el.id === selectFilm.id);

  if (!dublicateMovie) {
    arrayOfQueue.push(selectFilm);
    localStorage.setItem('filmsQueue', JSON.stringify(arrayOfQueue));
  } else {
    const resArr = arrayOfQueue.filter(el => el.id !== selectFilm.id);
    localStorage.setItem('filmsQueue', JSON.stringify(resArr));
  }
  monitorButtonStatusText();
}

function toggleToWatched() {
    const localWatched = JSON.parse(localStorage.getItem('filmsWatched'));
    const arrayOfWatched = [];
  
    if (localWatched) {
      arrayOfWatched.push(...localWatched);
    }
  
    const dublicateMovie = arrayOfWatched.find(el => el.id === selectFilm.id);
  
    if (!dublicateMovie) {
      arrayOfWatched.push(selectFilm);
      localStorage.setItem('filmsWatched', JSON.stringify(arrayOfWatched));
    } else {
      const resArr = arrayOfWatched.filter(el => el.id !== selectFilm.id);
      localStorage.setItem('filmsWatched', JSON.stringify(resArr));
    }
    monitorButtonStatusText();
  }



function showDetails(selectFilm) {
  imgOfFilm.src = `https://image.tmdb.org/t/p/w500${selectFilm.poster_path}`;
  titleOfFilm.textContent = `${
    selectFilm.original_title
  } (${selectFilm.release_date.slice(0, 4)})`;
  voteOfFilm.textContent = `${selectFilm.vote_average} / ${selectFilm.vote_count}`;
  popularityOfFilm.textContent = selectFilm.popularity.toFixed(1);
  originalNameOfFilm.textContent = selectFilm.original_title;
  aboutFilm.textContent = selectFilm.overview;

  const idOfGenres = selectFilm.genre_ids;

  let arrayOfGenres = [];

  for (let i = 0; i < idOfGenres.length; i++) {
    let id = idOfGenres[i];

    const result = genres.find(obj => obj.id === id);
    arrayOfGenres.push(result);
  }

  const arrOfGenres = arrayOfGenres.map(obj => obj.name);
  genreOfFilm.textContent = arrOfGenres.join(', ').toLowerCase();

  monitorButtonStatusText();
}
