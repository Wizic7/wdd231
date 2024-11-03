const green_btn = document.querySelector(".green");
green_btn.addEventListener('click', function(){
    classes = document.querySelector(".blue").classList;
    classes.toggle("show");
});