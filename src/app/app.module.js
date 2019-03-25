import {
    AppComponent
} from './app.component';

export const App = {
    init() {
        this.initComponents();
        this.initServiceWorker();
    },

    initComponents() {
        let sTop = document.getElementsByClassName('sandwich')[0],

sMiddle = document.getElementsByClassName('sandwich')[1],

sBottom = document.getElementsByClassName('sandwich')[2],

sandwichClicked = false;



sandwich.onclick = (e) => {

  sandwichClicked = !sandwichClicked;

  pause.hidden = true;

  play.hidden = false;

  clearInterval(autoscrolling);

  

  if(sandwichClicked) {

    sTop.classList.add("sandwichTopOpened");

    sMiddle.classList.add("sandwichMiddleOpened");

    sBottom.classList.add("sandwichBottomOpened");


hiddenMenu.classList.add("openedMenu");


startPray.classList.add("heightAuto");

newSinodik.classList.add("heightAuto");

newName.classList.add("heightAuto");

allSinodiks.classList.add("heightAuto");


logo.style.color = "rgba(45,45,45,1)";

  } else {

    sTop.classList.remove("sandwichTopOpened");

    sMiddle.classList.remove("sandwichMiddleOpened");

    sBottom.classList.remove("sandwichBottomOpened");


hiddenMenu.classList.remove("openedMenu");


startPray.classList.remove("heightAuto");

newSinodik.classList.remove("heightAuto");

newName.classList.remove("heightAuto");

allSinodiks.classList.remove("heightAuto");


logo.style.color = "snow";

  }

}



allSinodiks.addEventListener('click', (ev)=>{


ev.preventDefault();


startPray.classList.remove("heightAuto");

newSinodik.classList.remove("heightAuto");

newName.classList.remove("heightAuto");

allSinodiks.classList.remove("heightAuto");


setTimeout(()=>{

    sTop.classList.remove("sandwichTopOpened");

    sMiddle.classList.remove("sandwichMiddleOpened");

    sBottom.classList.remove("sandwichBottomOpened");


hiddenMenu.classList.remove("openedMenu");



logo.style.color = "snow";

  }, 1500);


setTimeout(()=>{

  hiddenList.classList.add("openedList");

hiddenList.innerHTML = `<center>+</center><h1>о здравии</h1>${names.reverse().map(n =>n.name).join('</br>')}`

}, 2000);


}, false);

  




let counter = 0;



function createDivForName (name) {

  let div = document.createElement('div');

  div.id = `person_${counter}`;

  div.className = 'personDiv';

  div.innerHTML = `${name.name}</br><p class='comments-for-name'>(${name.comments})</p>`

  container.append(div);

  counter++

}





let names = [

  {name:"археп. Амвросия", comments: "Ермаков"},

  {name:"арх. Никиты", comments: "духовник"},

  {name:"Елисаветы", comments: "супруга"},

  {name:"мл. Варвары", comments: "дочь"},

  {name:"мл. Иоанна", comments: "сын"},

  {name:"мл. Бориса", comments: "сын"},

  {name:"мл. Любови", comments: "дочь"},

  {name:"мл. Стефана", comments: "крестник"},

  {name:"мл. Иоанна", comments: "крестник"},

  {name:"археп. Амвросия", comments: "Ермаков"},

  {name:"арх. Никиты", comments: "духовник"},

  {name:"Елисаветы", comments: "супруга"},

  {name:"мл. Варвары", comments: "дочь"},

  {name:"мл. Иоанна", comments: "сын"},

  {name:"мл. Бориса", comments: "сын"},

  {name:"мл. Любови", comments: "дочь"},

  {name:"мл. Стефана", comments: "крестник"},

  {name:"мл. Иоанна", comments: "крестник"},

  {name:"мл. Александра", comments: "крестник"},

  {name:"мл. Леонида", comments: "крестник"}

];


names.reverse().forEach(n=>createDivForName(n));


document.body.addEventListener('touchstart', stopAutoScroll, true);


function stopAutoScroll (ev) {

 

  if(ev.target.className == 'personDiv') {

  pause.hidden = true;

  play.hidden = false;

clearInterval(autoscrolling);

  }

}



document.body.addEventListener('touchmove', move, true);


function move (ev) {


  // clearInterval(autoscrolling);


for ( let i = 0; i < counter; i++){

  getNameAndShowIt (`person_${i}`);

}


}



function getNameAndShowIt (ID) {


  

  // 1.нашел имя

  let firstName = document.getElementById(ID);



  // 2. определил растояние сверху

  let fromTop = firstName.getBoundingClientRect().top;

  //forPoints.value = fromTop;


  // 3. поставил условия

  if(fromTop>0 && fromTop < 260) {

firstName.style.opacity = 1;

// firstName.style.transform = 'translateZ(0px)';

  }else{

firstName.style.opacity = 0;

// firstName.style.transform = 'translateZ(-50px)';

  }


  

  if(fromTop>30 && fromTop < 190) {

firstName.style.filter = 'blur(0px)';

  }else{

firstName.style.filter = 'blur(8px)';

  }

  


}




  let autoscrolling;

  let counterFor = 0;


play.onclick = (ev) => {

  ev.target.hidden = true;

  pause.hidden = false;

  autoscrolling = setInterval(()=>{

    container.style.top = `${counterFor}px`;

    

    for ( let i = 0; i < counter; i++){

  getNameAndShowIt (`person_${i}`);

}


  counterFor += 1;

  if (container.getBoundingClientRect().top > 50) {

    clearInterval(autoscrolling);

  pause.hidden = true;

  counterFor = 0;

  }

  }, 8);

}



pause.onclick = (ev) => {

  pause.hidden = true;

  play.hidden = false;

  clearInterval(autoscrolling);

}




reloadList.onclick = (ev) => {

clearInterval(autoscrolling);

container.scrollIntoView(false);

pause.hidden = false;

counterFor = 0;

autoscrolling = setInterval(()=>{

    container.style.top = `${counterFor}px`;

    

    for ( let i = 0; i < counter; i++){

  getNameAndShowIt (`person_${i}`);

}

  counterFor += 1;

  if (container.getBoundingClientRect().top > 50) {

    clearInterval(autoscrolling);

container.scrollIntoView(false);


  pause.hidden = true;

  counterFor = 0;

  }

  }, 8);

}



container.scrollIntoView(false);
    },

    initServiceWorker() {
        if (!navigator.serviceWorker) {
            return;
        }
        navigator.serviceWorker
            .register('./sw.js')
            .then(() => {
                console.log('sw registered successfully!');
            })
            .catch((error) => {
                console.log('Some error while registering sw:', error);
            });
    }
};