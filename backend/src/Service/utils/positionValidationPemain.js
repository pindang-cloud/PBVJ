const validPositionPemain = (posisi) => {
  const validPositions = [
    "SETTER",
    "OUTSIDE_HITTER",
    "OPPOSITE",
    "LIBERO",
    "MIDDLE_BLOCKER",
  ];
  if (!validPositions.includes(posisi)) return false;
  else return true;
};

module.exports = { validPositionPemain };
