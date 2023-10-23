
function toggleReleaseClass() {
    var element = document.getElementById('roomba');
    element.classList.toggle('release');
  }
  
  document.getElementById('release').addEventListener('click', toggleReleaseClass);