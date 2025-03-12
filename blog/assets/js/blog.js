const menuEl =  document.getElementById( "dropdown-menu");
const menuButtonEl = document.querySelector(".burguer-btn");


console.log(menuEl);
console.log(menuButtonEl);
menuButtonEl.onclick = ()=>{
   menuEl.classList.toggle("active");
}

