// firebase-config.js

const admin = require("firebase-admin");
const serviceAccount = require("../admin-app-883ca-firebase-adminsdk-ojgqr-a3174edd34.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://admin-app-883ca.appspot.com", // Replace with your bucket name
});

const bucket = admin.storage().bucket();

module.exports = bucket;
