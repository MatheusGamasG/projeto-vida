const button = document.querySelector('.submit-button');
const nameInput = document.querySelector('.name-input');
const telInput = document.querySelector('.tel-input');


button.addEventListener('click', () => {      
    const donor = {
        name : nameInput.value,
        tel : telInput.value
    }

    fetch('https://us-central1-projeto-vida-ec162.cloudfunctions.net/api/donors', {
        method: "POST",
        body: JSON.stringify(donor),
        headers: {"Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin" : "*"
        }
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
})