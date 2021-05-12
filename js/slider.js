

document.querySelector(".one").onclick = function(){
    document.querySelector('.one').classList.add("reviews-active");
    document.querySelector('.reviews__slider').style.right = '0';
    document.querySelector('.two').classList.remove('reviews-active');
    document.querySelector('.three').classList.remove('reviews-active')
}

document.querySelector(".two").onclick = function(){
    document.querySelector('.two').classList.add("reviews-active");
    document.querySelector('.reviews__slider').style.right = '100%';
    document.querySelector('.one').classList.remove('reviews-active');
    document.querySelector('.three').classList.remove('reviews-active')
}

document.querySelector(".three").onclick = function(){
    document.querySelector('.three').classList.add("reviews-active");
    document.querySelector('.reviews__slider').style.right = '200%';
    document.querySelector('.one').classList.remove('reviews-active');
    document.querySelector('.two').classList.remove('reviews-active')
}


