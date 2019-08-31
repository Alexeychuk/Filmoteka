'use strict';

let inputValue = document.querySelector('.search-form__input').value;
const searchForm = document.querySelector('.search-form');
const input = document.querySelector('.search-form__input');
const btnPrev = document.querySelector('.thumbs__prev-btn');
const btnNext = document.querySelector('.thumbs__next-btn');
const paginationTxt = document.querySelector('.thumbs__txt');
const thumbs = document.querySelector('.thumbs');
const topBtn = document.querySelector('.top-btn');

paginationTxt.innerText = pageNumber;

if (pageNumber === 1) {
    btnPrev.classList.add('disable');
}

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
        if (pageNumber > 1) {
            paginationTxt.innerText--;
            pageNumber--;

            fetchFilms();

            if (pageNumber === 1) { 
                btnPrev.classList.remove('active');
                btnPrev.classList.add('disable');
            }
    
        }
    }

    if (e.target.classList.contains('thumbs__next-btn')) {
        btnPrev.classList.add('active');
        paginationTxt.innerText++;
        pageNumber++;

        fetchFilms();
    }
}

function scrollToTop() {
    const scrollStep = -window.scrollY / (300 / 15),
        scrollInterval = setInterval(function() {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }

            else clearInterval(scrollInterval); 
    }, 15);
}


searchForm.addEventListener('submit', searchFilms);
thumbs.addEventListener('click', plaginationNavigation);
topBtn.addEventListener('click', scrollToTop);

window.addEventListener('scroll', function (e) {
    if (document.documentElement.scrollTop > searchForm.offsetTop) {
        topBtn.classList.remove('disable');
    }

    if (document.documentElement.scrollTop < searchForm.offsetTop) {
        topBtn.classList.add('disable');
    }
});






