const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  try {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = async (password, hashedPassword) => {
  // changed parameter name
  return bcrypt.compare(password, hashedPassword); // compare with hashedPassword
};

module.exports = { hashPassword, comparePassword }; // exporting both functions
