const myInput = document.getElementById('myInput');

myInput.addEventListener('input', function() {
    if (myInput.value !== '') {
        myInput.classList.add('filled');
    } else {
        myInput.classList.remove('filled')
    }  
})