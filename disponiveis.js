const list = document.querySelector('.donor-list');

fetch('https://us-central1-projeto-vida-ec162.cloudfunctions.net/api/donors').
    then(response => {
        response = response.json();
        createDonors(response)
    });


function createDonors(donors) {
    for(let i = 0; i < donors.length; i++) {
        const newDonor = document.createElement('li');
        const donorName = document.createElement('p');
        donorName.innerHTML = donors[i].donorName;
        element.appendChild(donorName);
        list.appendChild(newDonor);
    }
}
