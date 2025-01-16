const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
    getAllUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmailOrUsername
  } = require('../models/usersModel');
  
  exports.login = async (req, res) => {
    try {
      const { identifier, password } = req.body;
  
      if (!identifier || !password) {
        return res.status(400).json({ message: 'Email/Username and password are required' });
      }
  
      const user = await getUserByEmailOrUsername(identifier);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign(
        { id: user.id_user, email: user.email, role: user.role },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '1h' }
      );
  
      res.status(200).json({
        message: 'Login successful',
        user: { id: user.id_user, email: user.email, role: user.role },
        token,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.logout = (req, res) => {
    try {
      res.clearCookie('token');

      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


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
          username,
          email,
          password: hashedPassword,
          phone,
          role: role || 'USER',
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
      const userId = req.params.id;  // Jangan gunakan parseInt untuk UUID
      if (!userId) {
        return res.status(400).json({ error: "Invalid user ID" });
      }
  
      const { username, email, password, phone, role } = req.body;
  
      const validRoles = ['ADMIN', 'USER'];
      const userRole = validRoles.includes(role) ? role : 'USER';
  
      let updatedData = { username, email, phone, role: userRole, updated_at: new Date() };
  
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
  