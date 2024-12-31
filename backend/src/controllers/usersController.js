const bcrypt = require('bcryptjs');
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
  
  // // Membuat user baru
  // exports.createUser = async (req, res) => {
  //   try {
  //     const newUser = await createUser(req.body);
  //     res.status(201).json(newUser);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // };

  exports.createUser = async (req, res) => {
    try {
      const { username, email, password, phone, role } = req.body;
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
          phone: phone,
          role: role,
          created_at: new Date(),
          update_at: new Date(),
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Memperbarui user
  exports.updateUser = async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const { username, email, password, phone, role } = req.body;
      let updatedData = { username, email, phone, role, updated_at: new Date() };
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updatedData.password = hashedPassword;
      }
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updatedData,
      });
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Menghapus user
  exports.deleteUser = async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const deletedUser = await prisma.user.delete({
        where: { id: userId },
      });
  
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  