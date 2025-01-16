const validPositionWasit = (posisi) => {
  const validPositions = ["WASIT_UTAMA", "WASIT_GARIS", "WASIT_PENCATAT_SKOR"];
  if (!validPositions.includes(posisi)) return false;
  else return true;
};

module.exports = { validPositionWasit };
