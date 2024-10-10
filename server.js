require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer')
const fs = require('fs')
const path = require('path');

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
const authToken = require('./middlewares/authToken');

let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {

            let type = req.params.type;

            let path = `${__dirname}/uploads/${type}`;
            if (!fs.existsSync(path)) {
                fs.access(`${__dirname}/uploads/${type}`, (error) => {
                    if (error) {
                        console.log("Access Err", error);
                    } else {
                        fs.mkdir(path, { recursive: true }, (err) => {
                            if (err) {
                                console.log("mkdir Err", error);
                            } else {
                                callback(null, path);
                            }
                        })
                    }
                })
            } else {
                callback(null, path);
            }
        },
        filename: (req, file, callback) => {
            callback(null, `img-${Date.now()}.${file.originalname}`);
        }
    })
});

// static folder
app.use(`/uploads`, express.static(`uploads`))

app.use('/api/v1/admin', adminRouter)  // Admin router
app.use('/api/v1/users', usersRouter)  // User router

app.post('/image/uploads/:type', authToken,
    //      (req, res, next) => {
    //     let token = req.headers[`authorization`];
    //     console.log("token", token);
    //     token = token.split(' ')[1];
    //     const decoded = jwtDecode(token);
    //     console.log(decoded);
    //     next();
    // }, 
    upload.single("file"), imgUploads)

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