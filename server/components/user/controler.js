const { error, success } = require("../../utils/response");
const { hashPassword, checkPassoword } = require("../../lib/Bcrypt");
const { generateToken } = require("../../lib/JWT");
const { CreateNewUser, GetOneUser } = require("./store");
const registerUser = (req, res) => {
  const { UserName, NickName, Password, ConfirmationPassword, Email } =
    req.body;

  if (Password !== ConfirmationPassword || !Password || !ConfirmationPassword) {
    return error(req, res, "Passwords do not match", 403);
  }

  let hashedPassword = hashPassword(Password);

  CreateNewUser({ UserName, NickName, Password: hashedPassword, Email })
    .then(() => {
      success(req, res, "User created");
    })
    .catch((err) => {
      console.log(err);
      error(req, res, err);
    });
};
const LoginUser = (req, res) => {
  const { UserName, Password } = req.body;

  GetOneUser({ UserName, Password })
    .then((userData) => {
      const isCorrectPassword = checkPassoword(Password, userData.Password);
      if (isCorrectPassword) {
        const token = generateToken({
          _id: userData._id,
          NickName: userData.NickName,
        });
        success(req, res, "Logged", 200, { token });
      } else {
        error(req, res, "Bad combination", 403);
      }
    })
    .catch(() => {
      error(req, res, "User does not exist", 404);
    });
};

module.exports = {
  LoginUser,
  registerUser,
};
