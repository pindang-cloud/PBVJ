const {
  createPelatih,
  getAllPelatih,
  getPelatihById,
  getPelatihByTim,
  updatePelatih,
  deletePelatih,
} = require("../Service/pelatihService");
const response = require("../../resTemp");
const { validateAndFormatDate } = require("../Service/utils/dateValidation");

const createPelatihController = async (req, res) => {
  try {
    const { name, usia, pengalaman, tanggalMulai, timID } = req.body;

    const afterCheckDate = validateAndFormatDate(tanggalMulai);

    const newPelatih = await createPelatih(
      name,
      usia,
      pengalaman,
      afterCheckDate,
      timID
    );

    response(res, 201, newPelatih, "Pelatih Created Successfully");
  } catch (error) {
    response(res, 500, {}, "Error Creating Pelatih", error.message);
  }
};

const getAllPelatihController = async (req, res) => {
  try {
    const pelatih = await getAllPelatih();
    response(res, 200, pelatih, "All Pelatih retrieved successfully");
  } catch (error) {
    response(res, 500, {}, "Error retrieving Pelatih", error.message);
  }
};

const getPelatihByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const pelatih = await getPelatihById(id);

    if (!pelatih) {
      return response(res, 404, {}, "Pelatih not found");
    }

    response(res, 200, pelatih, "Pelatih retrieved successfully");
  } catch (error) {
    response(res, 500, {}, "Error retrieving Pelatih", error.message);
  }
};

const getPelatihByTimController = async (req, res) => {
  try {
    const { timID } = req.params;
    const pelatih = await getPelatihByTim(timID);

    if (pelatih.length === 0) {
      return response(res, 404, {}, "No Pelatih Found For This Team");
    }

    response(res, 200, pelatih, "Players Retrieved Successfully");
  } catch (error) {
    response(res, 500, {}, "Error Retrieving Players By Team", error.message);
  }
};

const updatePelatihController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, usia, pengalaman, tanggalMulai, timID } = req.body;

    const afterCheckDate = validateAndFormatDate(tanggalMulai);

    const updatedPelatih = await updatePelatih(
      id,
      name,
      usia,
      pengalaman,
      afterCheckDate,
      timID
    );

    response(res, 200, updatedPelatih, "Pelatih updated successfully");
  } catch (error) {
    response(res, 500, {}, "Error updating Pelatih", error.message);
  }
};

const deletePelatihController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPelatih = await deletePelatih(id);

    response(res, 200, deletedPelatih, "Pelatih deleted successfully");
  } catch (error) {
    response(res, 500, {}, "Error deleting Pelatih", error.message);
  }
};

module.exports = {
  createPelatihController,
  getAllPelatihController,
  getPelatihByIdController,
  getPelatihByTimController,
  updatePelatihController,
  deletePelatihController,
};
