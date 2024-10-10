const { adminLogin, createLab, getLabByLabId, getLabByCategory, updateLabByLabId, deleteLabByLabId, createAdmin, getLabs, createRepository, updateRepository, deleteRepository, getLabsRepositoryById, getLabsRepository, assignLabs, getAdmins, getAdminById } = require('../../controller/admin/admin-controller');
const authToken = require('../../middlewares/authToken');

const router = require('express').Router();

router.post('/new', createAdmin);
router.get('/', authToken, getAdmins);
router.get('/:id', authToken, getAdminById);
router.post('/login', adminLogin);

module.exports = router;