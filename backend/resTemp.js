const response = (
  res,
  statusCode,
  data,
  message,
  errorMessage = "NULL",
  pagination = false,
  take = 10,
  totalData = 0,
  currentPage = 0
) => {
  if (pagination) {
    res.status(statusCode).json({
      code: statusCode,
      status: statusCode > 206 || statusCode < 200 ? "Fail" : "Success",
      message: message,
      data: {
        meta: {
          item_per_page: take,
          total: totalData,
          current_page: currentPage,
        },
        list: data,
      },
      error: statusCode > 206 || statusCode < 200 ? errorMessage : null,
    });
  } else {
    res.status(statusCode).json({
      status_code: statusCode,
      status: statusCode > 206 || statusCode < 200 ? "Fail" : "Success",
      message: message,
      data: data,
      error: statusCode > 206 || statusCode < 200 ? errorMessage : null,
    });
  }
};

module.exports = response;
