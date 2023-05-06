const button = document.querySelector('.submit-button');
const donorNameInput = document.querySelector('.donorName-input');
const speciesInput = document.querySelector('.species-input');
const raceInput = document.querySelector('.race-input');
const birthDateInput = document.querySelector('.birthDate-input');
const weightInput = document.querySelector('.weight-input');
const tutorNameInput = document.querySelector('.tutorName-input');
const cellphoneInput = document.querySelector('.cellphone-input');
const cellphone2Input = document.querySelector('.cellphone2-input');
const emailInput = document.querySelector('.email-input');
const instagramInput = document.querySelector('.instagram-input');


button.addEventListener('click', (e) => {      
    e.preventDefault();
    const donor = {
        donorName : donorNameInput.value,
        species : speciesInput.value,
        race : raceInput.value,
        birthDate : birthDateInput.value,
        weight : weightInput.value,
        tutorName : tutorNameInput.value,
        cellphone : cellphoneInput.value,
        cellphone2 : cellphone2Input.value,
        email : emailInput.value,
        instagram : instagramInput.value
    }

    fetch('https://us-central1-projeto-vida-ec162.cloudfunctions.net/api/donors', {
        method: "POST",
        body: JSON.stringify(donor),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(error => console.log(error))
})