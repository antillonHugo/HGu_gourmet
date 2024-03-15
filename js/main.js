let header_icon = document.querySelector('.header__icon');


//obtenemos los div con clase animation scroll
const boxes= document.querySelectorAll(".animation");


//llamamos la funcion para la amación con scroll
  window.addEventListener('scroll',checkBoxes);
  checkBoxes();

//funcion para la amación con scroll
function checkBoxes(){
     
    //obtiene la altura actual de la ventana del navegador
    const triggerBottom = window.innerHeight / 5 * 4;

    //rrecorremos todos los div con clase animation
    boxes.forEach((box,idx) =>{

        const boxTop = box.getBoundingClientRect().top;

        //validamos 
        if(boxTop  < triggerBottom){
            box.classList.add('showbox');
        }
        else{
            box.classList.remove('showbox');
        }
    });
}

//función para mostrar el menú en dispositivos pequeños y medianos
header_icon.addEventListener("click",e =>{

    let header__nav = document.querySelector(".header__nav");

    //obtenemos el icono para cambiarlo al realizar click
    let icono = header_icon.querySelector('i');

    // Alternar entre las clases "fa-bars" y "fa-xmark" cambiamos el icono al realizar click
    icono.classList.toggle('fa-bars');
    icono.classList.toggle('fa-xmark');

    header__nav.classList.toggle('header__nav-show');
});
