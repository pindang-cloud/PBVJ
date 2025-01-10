const {
  createWasit,
  getAllWasit,
  getWasitById,
  getWasitByPosisi,
  updateWasit,
  deleteWasit,
} = require("../Service/wasitService");
const response = require("../../resTemp");
const {
  validPositionWasit,
} = require("../Service/utils/positionValidationWasit");
const { validateAndFormatDate } = require("../Service/utils/dateValidation");

const createWasitController = async (req, res) => {
  try {
    const { name, usia, pengalaman, sertifikasi, tanggalMulai, posisi } =
      req.body;

    const checkPosition = validPositionWasit(posisi);
    if (!checkPosition) return response(res, 400, {}, "Invalid Posisi Value");

    const afterDateFormat = validateAndFormatDate(tanggalMulai);

    const newWasit = await createWasit({
      name,
      usia,
      pengalaman,
      sertifikasi,
      tanggalMulai: afterDateFormat,
      posisi,
    });
    response(res, 201, newWasit, "Wasit Created Successfully");
  } catch (error) {
    response(res, 500, {}, "Error Creating Wasit", error.message);
  }
};

const getAllWasitController = async (req, res) => {
  try {
    const allWasit = await getAllWasit();
    response(res, 200, allWasit, "List Of All Wasit");
  } catch (error) {
    response(res, 500, {}, "Error Fetching Wasit", error.message);
  }
};

const getWasitByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const wasit = await getWasitById(id);

    if (!wasit) {
      return response(res, 404, {}, "Wasit Not Found");
    }

    response(res, 200, wasit, "Wasit Details Fetched Successfully");
  } catch (error) {
    response(res, 500, {}, "Error Fetching Wasit", error.message);
  }
};

const getWasitByPosisiController = async (req, res) => {
  try {
    const { posisi } = req.params;

    const checkPosition = validPositionWasit(posisi);
    if (!checkPosition) return response(res, 400, {}, "Invalid Posisi Value");

    const wasit = await getWasitByPosisi(posisi);

    response(
      res,
      200,
      wasit,
      `Wasit With Posisi ${posisi} Fetched Successfully`
    );
  } catch (error) {
    response(res, 500, {}, "Error Fetching Wasit By Posisi", error.message);
  }
};

const updateWasitController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, usia, pengalaman, sertifikasi, tanggalMulai, posisi } =
      req.body;

    const checkPosition = validPositionWasit(posisi);
    if (!checkPosition) return response(res, 400, {}, "Invalid Posisi Value");

    const afterDateFormat = validateAndFormatDate(tanggalMulai);

    const updatedWasit = await updateWasit(id, {
      name,
      usia,
      pengalaman,
      sertifikasi,
      tanggalMulai: afterDateFormat,
      posisi,
    });

    response(res, 200, updatedWasit, "Wasit Updated Successfully");
  } catch (error) {
    response(res, 500, {}, "Error Updating Wasit", error.message);
  }
};

const deleteWasitController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteWasit(id);
    response(res, 200, {}, "Wasit deleted successfully");
  } catch (error) {
    response(res, 500, {}, "Error deleting Wasit", error.message);
  }
};

module.exports = {
  createWasitController,
  getAllWasitController,
  getWasitByIdController,
  getWasitByPosisiController,
  updateWasitController,
  deleteWasitController,
};
