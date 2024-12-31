const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  } = require('../models/usersModel');
  
  // Mendapatkan semua user
  exports.getUsers = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Mendapatkan user berdasarkan ID
  exports.getUser = async (req, res) => {
    try {
      const user = await getUserById(parseInt(req.params.id));
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Membuat user baru
  exports.createUser = async (req, res) => {
    try {
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Memperbarui user
  exports.updateUser = async (req, res) => {
    try {
      const updatedUser = await updateUser(parseInt(req.params.id), req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Menghapus user
  exports.deleteUser = async (req, res) => {
    try {
      const deletedUser = await deleteUser(parseInt(req.params.id));
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  