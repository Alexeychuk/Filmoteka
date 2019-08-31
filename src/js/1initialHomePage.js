'use strict'

const renderFilms, genres, pageNumber;

function createCardFunc( imgPath, filmTitle, movieId){
 return `<li class="films-item" ${movieId}>
            <span class='films-item__mark films-item__mark--disabled'>6.5</span>
            <p class="films-item__describe">

          <span class="films-item__name">${filmTitle}</span>
 
            </span>
            </p>
            </li>`
}