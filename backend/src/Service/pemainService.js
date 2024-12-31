const prisma = require("../../db");

const createPemain = async (name, nomerPunggung, posisi, timID) => {
  try {
    const pemain = await prisma.pemain.create({
      data: {
        name,
        nomerPunggung,
        posisi,
        timId_tim: timID,
      },
    });

    return pemain;
  } catch (error) {
    throw new Error(`Error creating pemain: ${error.message}`);
  }
};

const getAllPemain = async () => {
  try {
    const data = await prisma.pemain.findMany({
      where: { deleted_at: null },
      include: { Tim: true },
    });
    return data;
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const getPemainByID = async (id) => {
  try {
    const data = await prisma.pemain.findUnique({
      where: { id_pemain: id, deleted_at: null },
      include: { Tim: true },
    });

    return data;
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const getPemainByTim = async (timId) => {
  try {
    const data = await prisma.pemain.findMany({
      where: {
        timId_tim: timId,
        deleted_at: null,
      },
      include: {
        Tim: true,
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error Getting Data: ${error.message}`);
  }
};

const updatePemain = async (id, name, nomerPunggung, posisi, timID) => {
  try {
    const data = await prisma.pemain.update({
      where: { id_pemain: id, deleted_at: null },
      data: {
        name,
        nomerPunggung,
        posisi,
        timId_tim: timID,
      },
    });
    return data;
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
