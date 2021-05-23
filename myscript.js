var slideIndex = 0;
showSlide();

function showSlide(){
    var i = 0;
    var slide = document.getElementsByClassName("img-show");
    for(i = 0 ; i < slide.length ; i++){
        slide[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex > slide.length){
        slideIndex = 1;
    }
    slide[slideIndex-1].style.display="block";
    setTimeout(showSlide,2000);
}

function showTickets(){
    document.getElementById('show-ticket').style.display="block";
}

function closeTickets(){
    document.getElementById('show-ticket').style.display="none";
}