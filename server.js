require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const bucket = require("./config/firebaseConfig");

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const { imgUploads } = require('./controller/admin/admin-controller');
// const { resetPassword, forgotPassword, reset_password } = require('./controller/student/student-controller');

// Routers
const adminRouter = require('./router/admin/admin-router')
const usersRouter = require('./router/users/users-router')
const { countries, states, cities } = require('./helpers/world API/world-service');

const upload = multer({
    storage: multer.memoryStorage(), // Store files in memory before uploading to Firebase
});

app.use('/api/v1/admin', adminRouter)  // Admin router
app.use('/api/v1/users', usersRouter)  // User router

app.post("/image/uploads", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }

        const image = req.file;

        // Create a unique filename for the uploaded image
        const fileName = `${Date.now()}_${image.originalname}`;

        // Upload the file to Firebase Storage
        const file = bucket.file(fileName);

        // Create a stream and pipe the image buffer to Firebase Storage
        const stream = file.createWriteStream({
            metadata: {
                contentType: image.mimetype, // Image MIME type
            },
        });

        // Pipe the buffer from multer to Firebase Storage
        stream.end(image.buffer);

        // Listen for the 'finish' event to get the public URL
        stream.on("finish", async () => {
            // Make the file publicly accessible
            await file.makePublic();

            // Get the public URL of the file
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`;

            return res.status(200).json({
                success: true,
                message: "File uploaded successfully.",
                url: publicUrl,
            });
        });

        stream.on("error", (error) => {
            console.error("Error uploading file:", error.message);
            return res.status(500).json({ error: "Error uploading file." });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// Home Router
app.get('/', (req, res, next) => {
    res.send('Welcome to the Admin App. This is Home route');
})

// world API (country, state, city)
app.get("/countries", countries)
app.get("/states/:id", states)
app.get("/cities/:id", cities)

// forgot password
// app.post("/forgot-password", forgotPassword)

// reset password
// app.get('/reset-password/:id/:token', reset_password)

// update password
// app.post('/reset-password/:id/:token', resetPassword)

// Error handler
app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            success: false,
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on Port ${process.env.APP_PORT}`);
})