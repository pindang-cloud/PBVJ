const prisma = require("../../db");

const createWasit = async (data) => {
  try {
    return prisma.wasit.create({ data });
  } catch (error) {
    throw new Error(`Error Creating Wasit: ${error.message}`);
  }
};

const getAllWasit = async () => {
  try {
    return prisma.wasit.findMany({ where: { deleted_at: null } });
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const getWasitById = async (id) => {
  try {
    return prisma.wasit.findFirst({
      where: { id_wasit: id, deleted_at: null },
    });
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const getWasitByPosisi = async (posisi) => {
  try {
    return prisma.wasit.findMany({
      where: {
        posisi,
        deleted_at: null,
      },
    });
  } catch (error) {
    throw new Error(`Error Getting Data : ${error.message}`);
  }
};

const updateWasit = async (id, data) => {
  try {
    return prisma.wasit.update({
      where: { id_wasit: id, deleted_at: null },
      data,
    });
  } catch (error) {
    throw new Error(`Error Update Wasit: ${error.message}`);
  }
};

const deleteWasit = async (id) => {
  try {
    return prisma.wasit.delete({
      where: { id_wasit: id },
      data: { deleted_at: new Date() },
    });
  } catch (error) {
    throw new Error(`Error Delete Wasit: ${error.message}`);
  }
};

module.exports = {
  createWasit,
  getAllWasit,
  getWasitById,
  getWasitByPosisi,
  updateWasit,
  deleteWasit,
};
