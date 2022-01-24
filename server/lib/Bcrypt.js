const bcryptjs = require("bcryptjs");
const salt = bcryptjs.genSaltSync(10);

const hashPassword = (password) => {
  return (hashedPassword = bcryptjs.hashSync(password, salt));
};

const checkPassoword = (password, hashedPassword) => {
  return bcryptjs.compareSync(password, hashedPassword);
};

module.exports = {
  hashPassword,
  checkPassoword,
};
