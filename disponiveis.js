const list = document.querySelector('.donor-list');

fetch('https://us-central1-projeto-vida-ec162.cloudfunctions.net/api/donors').
    then(response => {createDonors(response.body)});


function createDonors(donors) {
    for await (const donor of donors) {
        const newDonor = document.createElement('li');
        const donorName = document.createElement('p');
        donorName.innerHTML = donors[i].donorName;
        element.appendChild(donorName);
        list.appendChild(newDonor);
    }
}
