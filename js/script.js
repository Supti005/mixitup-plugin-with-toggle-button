function toggler(selector){
    const button = document.querySelector(selector);
    if(!button.classList.contains('is-toggle')){
        removePreviousToggle();
        button.classList.add('is-toggle');
    }
    else{
        button.classList.remove('is-toggle');
    }
}

function removePreviousToggle(){
    const previousToggle = document.querySelector('.is-toggle');
    if(previousToggle){
        previousToggle.classList.remove('is-toggle');
        previousToggle.classList.remove('active');
    }
}

