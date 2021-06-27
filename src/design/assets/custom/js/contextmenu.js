let wrap = document.querySelector(".wrap");
window.addEventListener("contextmenu", event => {
if(event.button == 2) { wrap.classList.toggle("display");
wrap.style.left = (event.pageX - 4) + "px"; wrap.style.top = (event.pageY - 4) + "px";
}
event.preventDefault();
})
window.addEventListener("click", event => {
if(wrap.classList.contains("display")) {wrap.classList.remove("display");}
})
