const { error, success } = require("../../utils/response");
const { CreateNewUser } = require("./store");
const registerUser = (req, res) => {
  const { UserName, NickName, Password, ConfirmationPassword, Gender } =
    req.body;
  if (Password !== ConfirmationPassword || !Password || !ConfirmationPassword) {
    return error(req, res, "Passwords do not match", 403);
  }
  CreateNewUser({ UserName, NickName, Password, Gender })
    .then(() => {
      success(req, res, "User created");
    })
    .catch((err) => {
      console.log(err);
      error(req, res, err);
    });
  //Push the data to the database
};
const loginUser = (req, res) => {};

module.exports = {
  loginUser,
  registerUser,
};
