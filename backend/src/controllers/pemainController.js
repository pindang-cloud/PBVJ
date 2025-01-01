const response = require("../../resTemp");
const {
  createPemain,
  getAllPemain,
  getPemainByID,
  updatePemain,
  deletePemain,
  getPemainByTim,
} = require("../Service/pemainService");
const {
  validPositionPemain,
} = require("../Service/utils/positionValidationPemain");

const createPemainController = async (req, res) => {
  try {
    const { name, nomerPunggung, posisi, timID } = req.body;

    if (!name || !nomerPunggung || !posisi || !timID)
      return response(
        res,
        400,
        {},
        "Missing Required Fields: name, nomerPunggung, posisi, timID"
      );

    const checkPosition = validPositionPemain(posisi);
    if (!checkPosition) return response(res, 400, {}, "Invalid Posisi Value");

    const newPemain = await createPemain({
      name,
      nomerPunggung,
      posisi,
      timId_tim: timID,
    });

    response(res, 201, newPemain, "Data Has Been Created");
  } catch (error) {
    response(res, 500, {}, "Error Creating Pemain", error.message);
  }
};

const getAllPemainController = async (req, res) => {
  try {
    const pemainList = await getAllPemain();

    response(res, 200, pemainList, "Get Data Is Succesfuly");
  } catch (error) {
    response(res, 500, {}, "Error Fetching Pemain", error.message);
  }
};

const getPemainByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const pemain = await getPemainByID(id);

    if (!pemain) {
      return response(res, 404, {}, "Pemain Not Found - Check Again");
    }

    response(res, 200, pemain, "Get Data Is Succesfuly");
  } catch (error) {
    response(res, 500, {}, "Error Fetching Pemain", error.message);
  }
};

const getPemainByTimController = async (req, res) => {
  try {
    const { timId } = req.params;
    const pemain = await getPemainByTim(timId);

    if (pemain.length === 0) {
      return response(res, 404, {}, "No Players Found For This Team");
    }

    response(res, 200, pemain, "Players Retrieved Successfully");
  } catch (error) {
    response(res, 500, {}, "Error Retrieving Players By Team", error.message);
  }
};

const updatePemainController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, nomerPunggung, posisi, timID } = req.body;

    const checkPosition = validPositionPemain(posisi);
    if (!checkPosition) return response(res, 400, {}, "Invalid Posisi Value");

    const updatedPemain = await updatePemain(id, {
      name,
      nomerPunggung,
      posisi,
      timId_tim: timID,
    });

    response(res, 200, updatedPemain, "Update Data Is Succesfuly");
  } catch (error) {
    response(res, 500, {}, "Error Updating Pemain", error.message);
  }
};

const deletePemainController = async (req, res) => {
  try {
    const { id } = req.params;

    await deletePemain(id);

    response(res, 200, {}, "Delete Pemain Is Succesfully");
  } catch (error) {
    response(res, 500, {}, "Error Deleting Pemain", error.message);
  }
};

module.exports = {
  createPemainController,
  getAllPemainController,
  getPemainByIdController,
  getPemainByTimController,
  updatePemainController,
  deletePemainController,
};
