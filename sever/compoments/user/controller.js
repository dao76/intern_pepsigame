const userService = require("./service");
const bcrypt = require("bcryptjs");
const { translateAliases } = require("./model");

exports.login = async (username, password) => {

  try {
    const user = await userService.login(username, password);
    return { _id: user._id, username: user.username, user: password, coin: user.coin, numberexchange: user.numberexchange, numberfree: user.numberfree }
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
exports.updatecoin = async (id, coin) => {
  try {
    await userService.updatecoin(id, coin)
    return true
  } catch (error) {
    return false
  }
}
exports.updateplay = async (id, numberexchange) => {
  try {
    await userService.updatePlaY(id, numberexchange)
    return true
  } catch (error) {
    return false
  }
}
exports.updatefreeplay = async (id, numberfree) => {
  try {
    await userService.UpdateFreeplay(id, numberfree)
    return true
  } catch (error) {
    return false
  }
}
exports.insert = async (user) => {
  await userService.insert(user);

}
exports.update = async (id, user) => {
  try {
    await userService.update(id, user);

  } catch (error) {

  }
}
exports.delete = async (id) => {
  try {
    await userService.delete(id);

  } catch (error) {

  }
}
exports.getUser = async () => {
  try {
    let users = await userService.getUsers();
    users = users.map((item, index) => {
      item = {
        _id: item._id,
        username: item.username,
        password: item.password,
        name: item.name,
        coin: item.coin,
        numberexchange: item.numberexchange,
        numberfree: item.numberfree,
        index: index + 1
      }
      return item;
    })

    return users;
  } catch (error) {
    return []
  }
}

exports.getUserById = async (id) => {
  try {
    let user = await userService.getusertByID(id);
    user = {
      _id: user._id,
      username: user.username,
      password: user.password,
      name: user.name,
      coin: user.coin,
      numberexchange: user.numberexchange,
      numberfree: user.numberfree,
    }
    return user;
  } catch (error) {
    return {};
  }

}