const { getUsersById, getUsers, postUser, updateUser, deleteUser, userLogin } = require('../../controller/users/users-controller');
const authToken = require('../../middlewares/authToken');

const router = require('express').Router();

router.post('/new', authToken, postUser)
router.get('/', authToken, getUsers)
router.get('/:id', authToken, getUsersById)
router.delete('/:id', authToken, deleteUser)
router.patch('/:id', authToken, updateUser)

router.post('/login', userLogin)

module.exports = router;