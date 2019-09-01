
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

// localStorage.setItem('filmsQueue', '[]');
// localStorage.setItem('filmsWatched', '[]');

function monitorButtonStatusText() {
    if(filmsWatchedStorage){
        if (JSON.parse(filmsQueueStorage).find(obj => obj.id === selectFilm.id)) {
        addToQueueBtn.textContent = 'Delete from queue';
        addDeleteFromQueue.src = '/images/removeFromQueue.jpg'
        } else {
            addToQueueBtn.textContent = 'Add to queue';
            addDeleteFromQueue.src = '/images/detailsCalendar.png'
        }
    }
    

    if(filmsWatchedStorage){
         if (JSON.parse(filmsWatchedStorage).find(obj => obj.id === selectFilm.id)) {
        addToWatchedBtn.textContent = 'Delete from watched';
        addDeleteFromWatched.src = '/images/addDeleteFromWatched.jpg'
        } else {
            addToWatchedBtn.textContent = 'Add to watched';
            addDeleteFromWatched.src = '/images/detailsVideo.png';
        }

    }

   
}


let arrayOfQueue = []; 

function toggleToQueue() {
       
    arrayOfQueue.push(selectFilm);
       
    // if(selectFilm){
    //     const objOfSelectFilm = arrayOfQueue.find(obj => obj.id === selectFilm.id);
        
    //     if (objOfSelectFilm) {
    //     const index = arrayOfQueue.indexOf(objOfSelectFilm);
    //     arrayOfQueue.splice(index, 1);
    //     } else {
    //         arrayOfQueue.push(selectFilm);
    //     }
    // }
    localStorage.setItem('filmsQueue', JSON.stringify(arrayOfQueue));
    monitorButtonStatusText();
  
  }

   let arrayOfWatched = [];

  function toggleToWatched(){

   arrayOfWatched.push(selectFilm);
       
    // if(selectFilm){
    //     const objOfSelectFilm = arrayOfQueue.find(obj => obj.id === selectFilm.id);
        
    //     if (objOfSelectFilm) {
    //     const index = arrayOfQueue.indexOf(objOfSelectFilm);
    //     arrayOfQueue.splice(index, 1);
    //     } else {
    //         arrayOfQueue.push(selectFilm);
    //     }
    // }
    localStorage.setItem('filmsWatched', JSON.stringify(arrayOfWatched));
    monitorButtonStatusText();

  }



  const showDetails  = (selectFilm) => {
    imgOfFilm.src = `https://image.tmdb.org/t/p/w500${selectFilm.poster_path}`;

    titleOfFilm.textContent = `${selectFilm.original_title } (${selectFilm.release_date.slice(0,4)})`;
    voteOfFilm.textContent = `${selectFilm.vote_average} / ${selectFilm.vote_count}`;
    popularityOfFilm.textContent = selectFilm.popularity.toFixed(1);
    originalNameOfFilm.textContent = selectFilm.original_title;
    aboutFilm.textContent = selectFilm.overview;


    const idOfGenres = selectFilm.genre_ids;

    let arrayOfGenres = [];

    for (let i = 0; i < idOfGenres.length; i++) {

    let id = idOfGenres[i];
   
    const result = genres.find(obj => obj.id === id)
    arrayOfGenres.push(result);
    }

    const arrOfGenres = arrayOfGenres.map(obj => obj.name);
    genreOfFilm.textContent = arrOfGenres.join(', ').toLowerCase();

    monitorButtonStatusText();
  }


  


  
