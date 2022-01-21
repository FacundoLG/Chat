const User = require("./model");

const CreateNewUser = (userData) => {
  return new Promise((resolve, reject) => {
    const user = new User(userData);
    return user.save((err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  CreateNewUser,
};
