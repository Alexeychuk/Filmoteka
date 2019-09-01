
const findUl = document.querySelector("films-list container");

const createLibraryCardFunc = (imgPath, filmTitle, movieId, voteAverage) => {

    const li = document.createElement('li');
    li.classList.add("films-item");
    li.id = movieId;

    const img = document.createElement('img');
    img.classList.add("films-item__image");
    img.src = imgPath;

    const parag = document.createElement('p');
    parag.classList.add("films-item__describe");

    const span = document.createElement('span');
    span.classList.add("films-item__name");
    span.textContent = filmTitle;
    parag.append(span);

    const mark = document.createElement('span');
    mark.classList.add('films-item__mark');
    mark.textContent = voteAverage;

    li.append(img,mark,parag);
    li.addEventListener('click', activeDetailsPage);

    return li;
}

const drawQueueFilmList = () => {
    const fragment = document.createDocumentFragment();
    const keyFilm = localStorage.getItem('filmsQueue');

    if(!keyFilm[0] && !localStorage.length === 0) {
         keyFilm.forEach(() => {
            const li = createLibraryCardFunc();
            fragment.append(li);
            findUl.innerHTML = '';
            findUl.append(fragment);
        })} else {
        const createSpan = document.createComment('span');
        createSpan.textContent = 'You do not have to queue movies to watch. Add them.';
    }    
}

const drawWatchedFilmList = () => {
    const fragment = document.createDocumentFragment();
    const keyFilm = localStorage.getItem('filmsWatched');

    if(!keyFilm[0] && !localStorage.length === 0) {
        keyFilm.forEach(() => {
           const li = createLibraryCardFunc();
           fragment.append(li);
           findUl.innerHTML = '';
           findUl.append(fragment);
       })} else {
       const createSpan = document.createComment('span');
       createSpan.textContent = 'You do not have watched movies. Add them.';
   } 
}