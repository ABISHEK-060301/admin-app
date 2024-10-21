const { getUsersById, getUsers, postUser, updateUser, deleteUser, userLogin, getUsersByAdminId } = require('../../controller/users/users-controller');
const authToken = require('../../middlewares/authToken');

const router = require('express').Router();

router.post('/new', authToken, postUser)
router.get('/all', authToken, getUsers)
router.get('/', authToken, getUsersByAdminId)
router.get('/:id', authToken, getUsersById)
router.delete('/:id', authToken, deleteUser)
router.patch('/:id', authToken, updateUser)

router.post('/login', userLogin)

module.exports = router;