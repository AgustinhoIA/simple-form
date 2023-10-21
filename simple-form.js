const myInput = document.getElementsByClassName('input');

myInput.addEventListener('input', function() {
    if (myInput.value !== '') {
        myInput.classList.add('filled');
    } else {
        myInput.classList.remove('filled')
    }  
})