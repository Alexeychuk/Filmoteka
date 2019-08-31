'use strict';

let inputValue = document.querySelector('.search-form__input').value;
const searchForm = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
const btnPrev = document.querySelector('.thumbs__prev-btn');
const btnNext = document.querySelector('.thumbs__next-btn');
const paginationTxt = document.querySelector('.thumbs__txt');
const thumbs = document.querySelector('.thumbs');


if (pageNumber === 1) {
    btnPrev.classList.add('disable');
}

console.dir(paginationTxt);
paginationTxt.innerText = pageNumber;

function fetchFilms() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9e008f5d338cd1f22f432e50e537417d&language=en-US&query=${inputValue}&page=${pageNumber}&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            if (!data.results.length) {
                const warning = document.createElement('p');
                warning.classList.add('warning');
                warning.textContent = 'Enter correct query!!!';

                document.querySelector('.movies-wrap').insertBefore(warning, document.querySelector('.films-list'));

                setTimeout(() => {
                    warning.remove();
                }, 2000);
            } else {
                document.querySelector('.films-list').innerHTML = '';
                

                data.results.map(el => {
                    const moviePath = `https://image.tmdb.org/t/p/w400/${el.backdrop_path}`;
                    const movieTitle = `${el.title} (${el.release_date.slice(0, 4)})`;
                    const movieId = el.id;
                    
                    document.querySelector('.films-list').appendChild(createCardFunc(moviePath, movieTitle, movieId));
                });
            }
        })
        .catch(err => {
            console.log(err);
        })
}



function searchFilms(e) {
    e.preventDefault();

    inputValue = input.value;
    
    fetchFilms();

    e.target.reset();
}

function plaginationNavigation(e) {
    if (e.target.classList.contains('thumbs__prev-btn')) {
        if (pageNumber === 1) {  
            btnPrev.classList.add('disable');
        }
        
        if (paginationTxt.innerText > 1) {
            --paginationTxt.innerText;
            --pageNumber;
            console.log(pageNumber);
            fetchFilms();
    
        }
    }

    if (e.target.classList.contains('thumbs__next-btn')) {
        btnPrev.classList.add('active');
        paginationTxt.innerText++;
        pageNumber++;

        fetchFilms();
    }
}


searchForm.addEventListener('submit', searchFilms);
thumbs.addEventListener('click', plaginationNavigation)



