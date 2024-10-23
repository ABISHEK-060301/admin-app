// firebase-config.js

const admin = require("firebase-admin");
const serviceAccount = require("../admin-app-883ca-firebase-adminsdk-ojgqr-8524a9aae9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://admin-app-883ca.appspot.com", // Replace with your bucket name
});

const bucket = admin.storage().bucket();

module.exports = bucket;
