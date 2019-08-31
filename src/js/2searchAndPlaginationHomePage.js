'use strict';

let inputValue = document.querySelector('.search-form__input').value;
const searchForm = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
const btnPrev = document.querySelector('.thumbs__prev-btn');
const btnNext = document.querySelector('.thumbs__next-btn');
const pageNumber = document.querySelector('.thumbs__txt');


function fetchFilms() {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9e008f5d338cd1f22f432e50e537417d&language=en-US&query=${inputValue}&page=1&include_adult=false`)
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
                console.log(data);
            }
        });
}

function searchFilms(e) {
    e.preventDefault();

    inputValue = input .value;
    
    fetchFilms();

    e.target.reset();
}

searchForm.addEventListener('submit', searchFilms);




