const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');
const { checkRole } = require('../middlewares/authMiddleware');

// Rute User
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', checkRole(['admin']), createUser);
router.put('/:id', checkRole(['admin']), updateUser);
router.delete('/:id', checkRole(['admin']), deleteUser);

module.exports = router;
