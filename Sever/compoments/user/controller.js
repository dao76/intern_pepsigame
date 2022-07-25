const userService = require("./service");
const bcrypt = require("bcryptjs");
const { translateAliases } = require("./model");

exports.login = async (username, password) => {

  try {
    const user = await userService.login(username, password);
    return { _id: user._id, username: user.username, user: password }
  } catch (error) {

  }

};

exports.register = async (username, password, name) => {


  let user = await userService.login(username);
  try {
    if (user) {
      return null;
    }
    user = await userService.register(username, password, name);
    return { _id: user.id };
  } catch (error) {

  }
};