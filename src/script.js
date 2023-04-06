const cardElements=document.querySelectorAll('.card')
const cont= document.querySelector('container')
const main= document.getElementById('main');
const frstBtn= document.querySelector('#btn_1');
const scndBtn= document.querySelector('#btn_2');
const thrdBtn= document.querySelector('#btn_3');
const reset= document.querySelector('.reset');
const btn= document.querySelectorAll('.btn');

const win=document.querySelector('.victory');
const pair= document.querySelector('.pair');

let fruits = ['apple', 'cherries', 'grapes', 'kiwi', 'lemon', 'orange', 'pineapple', 'watermelon'];

// const cards = [...fruits, ...fruits];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i++) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


frstBtn.addEventListener('click',()=>{
    let cardsArray= Array.from(cardElements);
    let frstThree= cardsArray.slice(0, 3);
    frstThree.forEach((card, index)=>{
        shuffleArray(card);
        if(!card.querySelector('.fruitImg')){
            const fruitCard = document.createElement('div');
            let fruit = fruits[Math.floor(Math.random() * fruits.length)];
            fruitCard.innerHTML = `<img src="/fruits/${fruit}.png" alt="${fruit}">`;
            fruitCard.classList.add('fruitImg');
            card.appendChild(fruitCard);
        }
        })
            let first= frstThree[0].childNodes[1].childNodes[0].alt;
            let scnd= frstThree[1].childNodes[1].childNodes[0].alt;
            let thrd= frstThree[2].childNodes[1].childNodes[0].alt;
            
            if (first === scnd && first === thrd) {
                    win.style.display='flex';
                }
            if(first===scnd&& first!== thrd 
                || scnd===thrd && scnd!==first 
                || thrd===first && thrd!==scnd
                ){
                pair.style.display='block';
            }
})

scndBtn.addEventListener('click',()=>{
    let cardsArray= Array.from(cardElements);
    let scndThree= cardsArray.slice(3, 6);
    scndThree.forEach((card, index)=>{
        shuffleArray(card);
        if(!card.querySelector('.fruitImg')){
            const fruitCard = document.createElement('div');
            let fruit = fruits[Math.floor(Math.random() * fruits.length)];
            fruitCard.innerHTML = `<img src="/fruits/${fruit}.png" alt="${fruit}">`;
            fruitCard.classList.add('fruitImg');
            card.appendChild(fruitCard);       
        }
    })
    let first= scndThree[0].childNodes[1].childNodes[0].alt;
    let scnd= scndThree[1].childNodes[1].childNodes[0].alt;
    let thrd= scndThree[2].childNodes[1].childNodes[0].alt;
    
    if (first === scnd && first === thrd) {
            win.style.display='flex';
        }
        if(first===scnd&& first!== thrd 
            || scnd===thrd && scnd!==first 
            || thrd===first && thrd!==scnd){
            pair.style.display='block';
        }
})

thrdBtn.addEventListener('click',()=>{
    let cardsArray= Array.from(cardElements);
    let thrdThree= cardsArray.slice(6, 9);
    thrdThree.forEach((card, index)=>{
        shuffleArray(card);
        if(!card.querySelector('.fruitImg')){
            const fruitCard = document.createElement('div');
            let fruit = fruits[Math.floor(Math.random() * fruits.length)];
            fruitCard.innerHTML = `<img src="/fruits/${fruit}.png" alt="${fruit}">`;
            fruitCard.classList.add('fruitImg');
            card.appendChild(fruitCard);
        }
    })
    let first= thrdThree[0].childNodes[1].childNodes[0].alt;
    let scnd= thrdThree[1].childNodes[1].childNodes[0].alt;
    let thrd= thrdThree[2].childNodes[1].childNodes[0].alt;
    
    if (first === scnd && first === thrd) {
            win.style.display='flex';
        }
        if(first===scnd&& first!== thrd 
            || scnd===thrd && scnd!==first 
            || thrd===first && thrd!==scnd){
                pair.style.display='block';
        }
})

reset.addEventListener('click', ()=>{
    cardElements.forEach((card, index)=>{
        if(card.querySelector('.fruitImg')){
            card.childNodes[1].remove();
            pair.style.display='';
            win.style.display='';
        }
    })
})