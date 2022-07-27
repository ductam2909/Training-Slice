
document.ready(function(){
    document.querySelector("#toggle").addEventListener("click", (event) => {
        document.querySelector(".nav").slideToggle();
    });
})