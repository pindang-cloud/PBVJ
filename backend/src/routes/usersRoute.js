const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  logout
} = require('../controllers/usersController');
const { checkRole } = require('../middlewares/authMiddleware');

// Rute User
router.get('/', getUsers);
router.get('/:id', getUser);
// router.post('/', checkRole(['admin']), createUser);
router.post('/', createUser);
// router.put('/:id', checkRole(['admin']), updateUser);
router.put('/:id', updateUser);
router.delete('/:id', checkRole(['admin']), deleteUser);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
