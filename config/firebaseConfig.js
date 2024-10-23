// firebase-config.js

const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "admin-app-883ca",
        "private_key_id": "a3174edd34dd04742e4cf44c801bc24085523fb9",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCw6Gndt8jomViE\nTl+ecNjCGo9W4uRqfuZ25ztunmF3bWWYJthrJ1Lwy/5kk37j32NTiXDpCRc3uuDO\nOi9TvniA80c0Is1sPWMn5hBRIIFbZC8ilVJ3JYalD3Hgk8KRRkfiqxbusbVTBHNn\n/Gv5ZMcZeg+dPc/KUWcwf15Y/x52KxhA0+x2Uv3W+iye+j8FDyXOn7LbWYScwA3P\nfAtW/OgDLLzxnlOqixnLtu5ljCPLC98sR+NMoxgMic8UbiQZS3o2zlpidhS8bMF5\ntzze60tHFOE0Hti2DDwDBxTp0Zqpl7xlqv07yC3RhFif+NgAoOSNhO/KK97yg5GC\nVLyTlUIXAgMBAAECggEAGWVDzVBUxw88ZcHaeCQ6+aJWcWKg56jP7MHFBlw2Ia7S\npsTszHUYsviVzFpgHNY0rAlO7CUh8B4jp3cy1BLDub8yuYlFdARb955POVYxO61m\nFtDYxcHdUlSlRFfx1mkAaMmmwR1Bqmk5J/RUi7ir3DxpgWkeKy0EYzHlmWEGPnAz\ngqxOPFPlX5b0Nn/Km8M6LqoQmaiXDP5OuMKO6t6cpSRjCvjp5drUv3/rLaD8NAlY\ngQyJwh3ikawAE/MOLhnTnOJdrVw2R2uOc+daJPGeIGh/UBIyNt2xNBAZWIMSc/Kq\n0x+q690NjL7iGXMJaPgwjwnF0C10wE58Ko/Cx3FsAQKBgQD3GQKZ3QZXIbHQH+FQ\n9Hgfulxymo7lGTaHHx8Kuc94j02lSjTYSkWTEcD5E8OznL6tRNbKcvp/cGbbQaWW\ney4WsArkLLrFF/sgqgEgsKv+CQO0nuVL/iiF4xBopkK+EcFlMvAAF1xyyyWGQUVt\n0lZN2J33st+dzmSjP3M12vvJjwKBgQC3SApU+eT8YcpvSW/5gWklz1um5mtBwaZg\nnnpmIErWGUkZ2SeboJQKXRleT7XijDD9YFauOFy2qawMNKhHDjk0wj9BiX1jkhuz\nHJ1YzGdFyTTh5plFEgO1pEgoi+15knk0Ne2LoZdyfHQvv6ZGlrzVNC+LaX6frZxq\nGMKv4rdq+QKBgQDZGNQ8MwEbFLORVDE2W1QfLDGFT1400w4hcapoVhB+sAlcK/J6\nBedS68pMDJ1o9VJiEZVVkeeciDkWcnr114wKyukGyHXgLM2rSTJsckzqiSkETIbR\nWaBo4bLM/yassBTmwPY0XlIPWYTCjB5f+ulww90mf7YQhAHPnDOxIZEO6QKBgEET\nBgAX3fKyMfMDawt2pEO1dQA0TZ7CR/WEL0c1bfzIa4kO7h42jHmFhq1SteyjA/3i\nh8RB5MFCSwDmbV0VMsCFu3nkfC2vQcB9h2xw3rYLc4hFnOPGOqTymGA1FnMUy437\nG8V48VHH2GTfsgTcHl3AsqTYJwpA1QlikzVp1N/ZAoGBAPQF3tPoUXBKTwnUrS8f\nen1HhVtUZT26A1mPNlaLSJspz9itN/o6LptwODP3+LrxcCiMuG0hFLT9uXnX58lN\nekqcaPLPJTk2znd+rPlPdLArxj2aS/BJ2gsgdbWzCCuckGRmUKu5cFHC4Wzlmx1Z\nJ3K/3d3Hsi4ijreoZ4HUMKoH\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-ojgqr@admin-app-883ca.iam.gserviceaccount.com",
        "client_id": "110322408067076431976",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ojgqr%40admin-app-883ca.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }),
    storageBucket: "gs://admin-app-883ca.appspot.com", // Replace with your bucket name
});

const bucket = admin.storage().bucket();

module.exports = bucket;
