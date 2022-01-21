const success = (req, res, message, statusCode) => {
  res.status(statusCode || 200).json({
    message,
  });
};

const error = (req, res, message, stausCode) => {
  res.status(stausCode || 500).json({
    error: message,
  });
};
module.exports = { success, error };
