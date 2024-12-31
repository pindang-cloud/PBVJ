const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Mendapatkan semua user
exports.getAllUsers = async () => {
  return await prisma.user.findMany({
    where: { deleted_at: null },
  });
};

// Mendapatkan user berdasarkan ID
exports.getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id_user: id },
  });
};

// Membuat user baru
exports.createUser = async (data) => {
  return await prisma.user.create({
    data,
  });
};

// Memperbarui user
exports.updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id_user: id },
    data,
  });
};

// Menghapus user (soft delete)
exports.deleteUser = async (id) => {
  return await prisma.user.update({
    where: { id_user: id },
    data: { deleted_at: new Date() },
  });
};
