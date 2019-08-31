const addToWatchedBtn = document.querySelector('.detail__buttons--favorite');
const addToQueueBtn = document.querySelector('.detail__buttons--queue');

const imgOfFilm = document.querySelector('.detail__img--item');
const titleOfFilm = document.querySelector('.detail__description--title');
const voteOfFilm = document.querySelector('.detail__votes--value');
const popularityOfFilm = document.querySelector('.detail__popularity--value');
const originalNameOfFilm = document.querySelector('.detail__name--value'); 
const genreOfFilm = document.querySelector('.detail__genre--value'); 
const aboutFilm = document.querySelector('.detail__description--text'); 

let filmsQueueStorage = localStorage.getItem(filmsQueue);
let filmsWatchedStorage = localStorage.getItem(filmsWatched);


const monitorButtonStatusTex = () => {

    if (filmsQueueStorage.find(obj => obj.id === selectFilm.id)) {
        addToQueueBtn.textContent = 'Delete from queue';
    } else {
        addToQueueBtn.textContent = 'Add to queue';
    }

    
    if (filmsWatchedStorage.find(obj => obj.id === selectFilm.id)) {
        addToWatchedBtn.textContent = 'Delete from watched';
    } else {
        addToWatchedBtn.textContent = 'Add to watched';
    }

}





const toggleToQueue = () => {
    let arrayOfQueue = [];
    
  
    if (filmsQueueStorage != null) {
      arrayOfQueue.push(filmsQueueStorage);
    }

    const objOfSelectFilm = arrayOfQueue.find(obj => obj.id === selectFilm.id);
    
    if (objOfSelectFilm) {
       const index = arrayOfQueue.indexOf(objOfSelectFilm);
       arrayOfQueue.splice(index, 1);
    } else {
        arrayOfQueue.push(selectFilm);
    }

    localStorage.setItem(filmsQueue, arrayOfQueue)

    monitorButtonStatusTex();
  
  }

  const toggleToWatched  = () => {

    let arrayOfWatched = [];
    
  
    if (filmsWatchedStorage != null) {
        arrayOfWatched.push(filmsWatchedStorage);
    }

    const objOfSelectFilm = arrayOfWatched.find(obj => obj.id === selectFilm.id);
    
    if (objOfSelectFilm) {
       const index = arrayOfWatched.indexOf(objOfSelectFilm);
       arrayOfWatched.splice(index, 1);
    } else {
        arrayOfWatched.push(selectFilm);
    }

    localStorage.setItem(filmsWatched, arrayOfWatched)

    monitorButtonStatusTex();

  }


  const showDetails  = (selectFilm) => {
    imgOfFilm.src = selectFilm.poster_path;
    titleOfFilm.textContent = `${selectFilm.original_title }+(${selectFilm.release_date.slice(0,4)})`;
    voteOfFilm.textContent = `${selectFilm.average}${selectFilm.vote_count}`;
    popularityOfFilm.textContent = selectFilm.popularity.toFixed(1);
    originalNameOfFilm.textContent = selectFilm.original_title;

    const arrOfGenres = selectFilm.genres.map(obj => obj.name);
    genreOfFilm.textContent = arrOfGenres.join(', ');

    aboutFilm.textContent = selectFilm.overview;

    monitorButtonStatusText();
  }


  
