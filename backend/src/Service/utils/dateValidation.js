const validateAndFormatDate = (dateString) => {
  try {
    const iso8601Regex =
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|([+-]\d{2}:\d{2}))?$/;

    if (!iso8601Regex.test(dateString)) {
      throw new Error("Invalid date format. Use ISO 8601 format.");
    }

    let formattedDate = new Date(dateString);

    if (isNaN(formattedDate.getTime())) {
      throw new Error("Invalid date value.");
    }

    if (
      !dateString.endsWith("Z") &&
      !dateString.includes("+") &&
      !dateString.includes("-")
    ) {
      formattedDate = new Date(dateString + "Z");
    }

    const formattedDateFinal = new Date(
      formattedDate.getTime() + 7 * 60 * 60 * 1000
    );
    return formattedDateFinal;
  } catch (error) {
    throw new Error(error.message || "Error validating and formatting date.");
  }
};

module.exports = { validateAndFormatDate };
