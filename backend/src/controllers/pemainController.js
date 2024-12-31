const response = require("../../resTemp");
const {
  createPemainFunc,
  getAllPemainFunc,
  getPemainByIDFunc,
  updatePemainFunc,
  deletePemainFunc,
  getPemainByTimFunc,
} = require("../Service/pemainService");

const createPemain = async (req, res) => {
  try {
    const { name, nomerPunggung, posisi, timID } = req.body;

    if (!name || !nomerPunggung || !posisi || !timID)
      return response(
        res,
        400,
        {},
        "Missing Required Fields: name, nomerPunggung, posisi, timID - Check Again"
      );

    const newPemain = await createPemainFunc(
      name,
      nomerPunggung,
      posisi,
      timID
    );

    response(res, 201, newPemain, "Data Has Been Created");
  } catch (error) {
    response(
      res,
      500,
      {},
      "Error Creating Pemain - Check Again",
      error.message
    );
  }
};

const getAllPemain = async (req, res) => {
  try {
    const pemainList = await getAllPemainFunc();

    response(res, 200, pemainList, "Get Data Is Succesfuly");
  } catch (error) {
    response(res, 500, {}, "Error Fetching Pemain", error.message);
  }
};

const getPemainById = async (req, res) => {
  try {
    const { id } = req.params;

    const pemain = await getPemainByIDFunc(id);

    if (!pemain) {
      return response(res, 404, {}, "Pemain Not Found - Check Again");
    }

    response(res, 200, pemain, "Get Data Is Succesfuly");
  } catch (error) {
    response(res, 500, {}, "Error Fetching Pemain", error.message);
  }
};

const getPemainByTim = async (req, res) => {
  try {
    const { timId } = req.params;
    const pemain = await getPemainByTimFunc(timId);

    if (pemain.length === 0) {
      return response(res, 404, {}, "No Players Found For This Team");
    }

    response(res, 200, pemain, "Players Retrieved Successfully");
  } catch (error) {
    response(res, 500, {}, "Error Retrieving Players By Team", error.message);
  }
};

const updatePemain = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, nomerPunggung, posisi, timID } = req.body;

    const updatedPemain = await updatePemainFunc(
      id,
      name,
      nomerPunggung,
      posisi,
      timID
    );

    response(res, 200, updatedPemain, "Update Data Is Succesfuly");
  } catch (error) {
    response(res, 500, {}, "Error Updating Pemain", error.message);
  }
};

const deletePemain = async (req, res) => {
  try {
    const { id } = req.params;

    await deletePemainFunc(id);

    response(res, 204, {}, "Delete Pemain Is Succesfully");
  } catch (error) {
    response(res, 500, {}, "Error Deleting Pemain", error.message);
  }
};

module.exports = {
  createPemain,
  getAllPemain,
  getPemainById,
  getPemainByTim,
  updatePemain,
  deletePemain,
};
