const success = (req, res, message, statusCode, data) => {
  res.status(statusCode || 200).json({
    message,
    data,
  });
};

const error = (req, res, message, stausCode) => {
  res.status(stausCode || 500).json({
    error: message,
  });
};
module.exports = { success, error };
