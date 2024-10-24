// firebase-config.js

const admin = require("firebase-admin");
const serviceAccount = {
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
}
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_BUCKET_NAME, // Replace with your bucket name
});

const bucket = admin.storage().bucket();

module.exports = bucket;
