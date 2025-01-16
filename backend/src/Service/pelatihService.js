const prisma = require("../../db");

const createPelatih = async (data) => {
  try {
    return await prisma.pelatih.create({
      data,
    });
  } catch (error) {
    throw new Error(`Error Creating Data : ${error.message}`);
  }
};

const getAllPelatih = async () => {
  try {
    return await prisma.pelatih.findMany({
      where: {
        deleted_at: null,
      },
      include: {
        Tim: true,
      },
    });
  } catch (error) {
    throw new Error(`Error Getting Data : ${error.message}`);
  }
};

const getPelatihById = async (id) => {
  try {
    return await prisma.pelatih.findUnique({
      where: {
        id_pelatih: id,
        deleted_at: null,
      },
      include: {
        Tim: true,
      },
    });
  } catch (error) {
    throw new Error(`Error Getting Data : ${error.message}`);
  }
};

const getPelatihByTim = async (timID) => {
  try {
    return await prisma.pelatih.findMany({
      where: {
        timId_tim: timID,
        deleted_at: null,
      },
    });
  } catch (error) {
    throw new Error(`Error Getting Data : ${error.message}`);
  }
};

const updatePelatih = async (id, data) => {
  try {
    return await prisma.pelatih.update({
      where: {
        id_pelatih: id,
      },
      data,
    });
  } catch (error) {
    throw new Error(`Error Updating Data : ${error.message}`);
  }
};

const deletePelatih = async (id) => {
  return await prisma.pelatih.delete({
    where: {
      id_pelatih: id,
      deleted_at: null,
    },
    data: {
      deleted_at: new Date(),
    },
  });
};

module.exports = {
  createPelatih,
  getAllPelatih,
  getPelatihById,
  getPelatihByTim,
  updatePelatih,
  deletePelatih,
};
