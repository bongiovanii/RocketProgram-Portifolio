const menuEl =  document.querySelector( "#header#dropdown-menu ");
const menuButtonEl = document.querySelector("#header .burguer-btn ");

menuButtonEl.onclick = ()=>{
   menuEl.classList.toggle("active");
}

