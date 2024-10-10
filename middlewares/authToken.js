const { verify } = require("jsonwebtoken");

const authToken = (req, res, next) => {
    let token = req.headers[`authorization`];
    if (token) {
        token = token.split(' ')[1];
        verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                err.status = 401;
                next(err);
            }
            req.decoded = decoded;
            next();
        })
    } else {
        const err = new Error('Access Denied. UnAuthorized User!');
        err.status = 401;
        next(err);
    }
}

module.exports = authToken;