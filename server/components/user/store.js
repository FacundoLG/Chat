const User = require("./model");

const CreateNewUser = (userData) => {
  return new Promise((resolve, reject) => {
    const user = new User(userData);
    return user.save((err) => {
      if (err) {
        const errorMessage = err.message.split(":")[2].trim();
        reject(errorMessage);
      } else {
        resolve();
      }
    });
  });
};

const GetOneUser = (userData) => {
  return new Promise((resolve, reject) => {
    User.findOne({ UserName: userData.UserName }).then(resolve).catch(reject);
  });
};

module.exports = {
  CreateNewUser,
  GetOneUser,
};
