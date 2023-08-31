const slides = document.querySelectorAll(".slide");
const botonSiguiente = document.querySelector(".nextBtn");
const botonAnterior = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    slide.style.bottom = `${index * 100}%` ;
});

let contador = 0;

botonSiguiente.addEventListener("click", function() {
    contador++;
    carousel();
})


botonAnterior.addEventListener("click", function() {
    contador--;
    carousel();
})

function carousel() {
    if(contador < slides.length - 1){
        botonSiguiente.style.display = "block";
    }else{
        botonSiguiente.style.display = "none";
    }

    if(contador > 0){
        botonAnterior.style.display = "block";
    }else{
        botonAnterior.style.display = "none";
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateY(-${contador * 100}%)` ;
    });
    botonAnterior.style.display = "none";
}