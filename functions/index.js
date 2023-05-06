const functions = require("firebase-functions");

const app = require("express")();

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore().collection("donors");

const cors = require('cors');
app.use(cors({origin:'https://matheusgamasg.github.io'}))

app.get("/donors", function(request, response){
    db.get()
        .then(function(documents){
            let donors = [];
            documents.forEach(doc => {
                donors.push({id: doc.id, name:doc.data().name});
            });

            response.json(donors);
        })
});

app.post("/donors", function(request, response){
    const newDonor = {
        donorName : request.body.donorName,
        species : request.body.species,
        race : request.body.race,
        birthDate : request.body.birthDate,
        weight : request.body.weight,
        tutorName : request.body.tutorName,
        cellphone : request.body.cellphone,
        cellphone2 : request.body.cellphone2,
        email : request.body.email,
        instagram : request.body.instagram
    }

    db.add(newDonor)
        .then(function() {
            response.status(200);
        })
});

exports.api = functions.https.onRequest(app);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
