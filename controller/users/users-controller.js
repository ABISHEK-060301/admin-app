const { compareSync } = require("bcrypt");
const encryptPassword = require("../../helpers/encrypt-passort");
const { getUsersByUserId, deleteUserByUserId, createNewUser, updateUserByUserId, getUserByEmail, getAllUsers, getAllUsersByAdmin } = require("../../services/users/users-service");
const { sign } = require("jsonwebtoken");

module.exports = {
    getUsers: async (_, res, next) => {
        try {
            const result = await getAllUsers();
            res.json({
                success: true,
                message: 'Users List fetched success',
                data: result
            })
        } catch (error) {
            next(new Error(error))
        }
    },

    getUsersByAdminId: async (req, res, next) => {
        try {
            const result = await getAllUsersByAdmin(req.decoded.id);
            res.json({
                success: true,
                message: 'Users List fetched success',
                data: result
            })
        } catch (error) {
            next(new Error(error))
        }
    },

    getUsersById: async (req, res, next) => {
        try {
            const result = await getUsersByUserId(req.params.id);
            res.json({
                success: true,
                message: 'User fetched success',
                data: result
            })
        } catch (error) {
            next(new Error(error))
        }
    },

    postUser: async (req, res, next) => {
        try {
            const result = await createNewUser(req.body, req.decoded.id);
            res.json({
                success: true,
                message: 'New user created success',
                data: result
            })
        } catch (error) {
            next(new Error(error))

        }
    },

    updateUser: async (req, res, next) => {
        try {
            const result = await updateUserByUserId(req.body, req.params.id);
            res.json({
                success: true,
                message: 'User updated successfully',
                data: result
            })
        } catch (error) {
            next(new Error(error))

        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const result = await deleteUserByUserId(req.params.id);
            res.json({
                success: true,
                message: 'Users deleted success',
                data: result
            })
        } catch (error) {
            next(new Error(error))
        }
    },

    // User login
    userLogin: async (req, res, next) => {
        try {
            const authResult = await getUserByEmail(req.body.email);
            const results = compareSync(req.body.password, authResult.password);
            if (!results) {
                throw new Error("Password dose not match")
            }
            authResult.password = undefined;
            const secret = process.env.JWT_SECRET_KEY;
            const options = {
                expiresIn: process.env.JWT_TOKEN_EXPIRESIN,
            };
            const jsowebtoken = sign({ ...authResult }, secret, options);
            res.json({
                success: true,
                message: "Login success",
                data: { ...authResult, token: jsowebtoken },
            });
        } catch (error) {
            res.json({
                success: false,
                message: "Invalid Credentials",
                error: error.message,
            });
        }
    },
}