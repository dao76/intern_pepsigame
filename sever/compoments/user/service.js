/**
 * sevice: tầng lớp giao tiếp với database
 */

const userModel = require("./model");

exports.login = async (username, password) => {

  const user = await userModel.findOne({ username: username, password: password },
    "id username password coin numberplay numberexchange numberfree ");
  // tìm  ra 1 với điều kiện username và lấy ra những cột ở dưới
  return user;
};

exports.register = async (username, password, name) => {
  const user = new userModel({ username, password, name });
  return await user.save();

};
exports.updatecoin = async (id, coin) => {
  await userModel.findOneAndUpdate(
    { _id: id },
    {
      $set:
      {
        coin: coin,

      }
    }
  )
}
exports.updatePlaY = async (id, numberexchange) => {
  await userModel.findOneAndUpdate(
    { _id: id },
    {
      $set:
      {
        numberexchange: numberexchange,

      }
    }
  )
}
exports.UpdateFreeplay = async (id, numberfree) => {
  await userModel.findOneAndUpdate(
    { _id: id },
    {
      $set:
      {
        numberfree: numberfree,

      }
    }
  )
}
exports.insert = async (user) => {
  const p = new userModel(user);
  await p.save();

}
exports.update = async (id, user) => {

  await userModel.findOneAndUpdate(id, user);
}



exports.delete = async (id) => {
  await userModel.findByIdAndDelete(id);

}
exports.getUsers = async () => {
  // return data;
  return userModel.find({}, 'id username password name coin numberexchange numberfree')
};
exports.getusertByID = async (id) => {
  const user = await userModel.findOne({ '_id': id })
  return user
}


