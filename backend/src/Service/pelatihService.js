const prisma = require("../../db");

const createPelatih = async (name, usia, pengalaman, tanggalMulai, timID) => {
  return await prisma.pelatih.create({
    data: {
      name: name,
      usia: usia,
      pengalaman: pengalaman,
      tanggalMulai: tanggalMulai,
      timId_tim: timID,
    },
  });
};

const getAllPelatih = async () => {
  return await prisma.pelatih.findMany({
    where: {
      deleted_at: null,
    },
    include: {
      Tim: true,
    },
  });
};

const getPelatihById = async (id) => {
  return await prisma.pelatih.findUnique({
    where: {
      id_pelatih: id,
      deleted_at: null,
    },
    include: {
      Tim: true,
    },
  });
};

const getPelatihByTim = async (timID) => {
  return await prisma.pelatih.findMany({
    where: {
      timId_tim: timID,
      deleted_at: null,
    },
  });
};

const updatePelatih = async (
  id,
  name,
  usia,
  pengalaman,
  tanggalMulai,
  timID
) => {
  return await prisma.pelatih.update({
    where: {
      id_pelatih: id,
    },
    data: {
      name: name,
      usia: usia,
      pengalaman: pengalaman,
      tanggalMulai: tanggalMulai,
      timId_tim: timID,
    },
  });
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
