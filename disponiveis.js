const list = document.querySelector('.donor-list');

fetch('https://us-central1-projeto-vida-ec162.cloudfunctions.net/api/donors').
    then(response => console.log(response))
