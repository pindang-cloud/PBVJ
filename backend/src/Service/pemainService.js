const prisma = require("../../db");

const createPemain = async (data) => {
  try {
    return await prisma.pemain.create({
      data,
    });
  } catch (error) {
    throw new Error(`Error creating pemain: ${error.message}`);
  }
};

const getAllPemain = async () => {
  try {
    return await prisma.pemain.findMany({
      where: { deleted_at: null },
      include: { Tim: true },
    });
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const getPemainByID = async (id) => {
  try {
    return await prisma.pemain.findUnique({
      where: { id_pemain: id, deleted_at: null },
      include: { Tim: true },
    });
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const getPemainByTim = async (timId) => {
  try {
    return await prisma.pemain.findMany({
      where: {
        timId_tim: timId,
        deleted_at: null,
      },
      include: {
        Tim: true,
      },
    });
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const updatePemain = async (id, data) => {
  try {
    return await prisma.pemain.update({
      where: { id_pemain: id, deleted_at: null },
      data,
    });
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const deletePemain = async (id) => {
  try {
    return await prisma.pemain.delete({
      where: { id_pemain: id, deleted_at: null },
      data: { deleted_at: new Date() },
    });
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

module.exports = {
  createPemain,
  getAllPemain,
  getPemainByID,
  getPemainByTim,
  updatePemain,
  deletePemain,
};
