'use strict'

let renderFilms, genres, pageNumber;

pageNumber = 1;

const list = document.querySelector('.films-list');

function createCardFunc( imgPath, filmTitle, movieId){

    const li = document.createElement('li');
    li.classList.add("films-item");
    li.id = movieId;

    const img = document.createElement('img');
    img.classList.add("films-item__image");
    const regEx = /null/g; 
    
    
    if(regEx.test(imgPath)){
        
        img.src = './images/Zaglushka.jpg'
    } else{
        img.src = imgPath;
    }
   

    const parag = document.createElement('p');
    parag.classList.add("films-item__describe");

    const span = document.createElement('span');
    span.classList.add("films-item__name");
    span.textContent = filmTitle;
    parag.append(span);
     li.append(img,parag);   

    li.addEventListener('click', function handleItem(){
        console.log(this);
    })

    return li;
    
}

