const { compareSync } = require("bcrypt");
const {
    createNewLab,
    getLabById,
    getLabsByCategoryId,
    updateLabDetails,
    deleteLabById,
    createNewAdmin,
    getAllLabs,
    getAdminUserByEmail,
    createNewRepository,
    updateRepositoryById,
    deleteRepositoryById,
    getAllLabsInRepository,
    getLabRepositoryById,
    assignLabsToStudents,
    getLabsCategorywiseCount,
    getAllAdmins,
    getAdminByAdminId,
} = require("../../services/admin/admin-service");

const { sign } = require("jsonwebtoken");
const encryptPassword = require("../../helpers/encrypt-passort");

module.exports = {
    createAdmin: async (req, res, next) => {
        req.body.password = encryptPassword(req.body.password);
        try {
            const result = await createNewAdmin(req.body);
            res.json({
                success: true,
                message: "Admin created success",
                data: result,
            });
        } catch (error) {
            next(new Error(error));
        }
    },

    // Admin login
    adminLogin: async (req, res, next) => {
        try {
            const authResult = await getAdminUserByEmail(req.body.email);
            if (!authResult) throw new Error("Admin doesn't exist");
            const results = compareSync(req.body.password, authResult.password);
            if (!results) throw new Error("Password doesn't match");
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

    // Get all admins
    getAdmins: async (req, res, next) => {
        try {
            const result = await getAllAdmins();
            res.json({
                success: true,
                message: "Admin details fetched successfully",
                data: result,
            });
        } catch (error) {
            next(new Error(error));
        }
    },

    // Get specific lab by lab id
    getAdminById: async (req, res, next) => {
        try {
            const result = await getAdminByAdminId(req.params.id);
            res.json({
                success: true,
                message: "Admin fetched success",
                data: result,
            });
        } catch (error) {
            next(new Error(error));
        }
    },

    imgUploads: (req, res, next) => {
        try {
            if (!req.file?.filename) {
                const err = new Error('BAD REQUEST: File not found, please attach the file!');
                err.status = 400;
                next(err);
            }
            res.json({
                success: true,
                message: "Uploaded success",
                url: `http://${process.env.APP_HOST}:${process.env.APP_PORT}/${process.env.MULTER_UPLOAD_FILE_DESTINATION}/${req.params[`type`]}/${req.file.filename}`,
            });
        } catch (error) {
            next(new Error(error));
        }
    },
};
