/**
 * sevice: tầng lớp giao tiếp với database
 */

const userModel = require("./model");

exports.login = async (username, password) => {
  // const user = data.filter((item) => item.username == username)[0];
  // return user;

  // select id, username,password from users where email = ' '
  const user = await userModel.findOne({ username: username, password: password },
    "id username password");
  // tìm  ra 1 với điều kiện username và lấy ra những cột ở dưới
  return user;
};

exports.register = async (username, password, name) => {
  const user = new userModel({ username, password, name });
  return await user.save();

};

var data = [
  { id: 1, username: "admin@gmail.com", password: "1", name: "Tuấn" },
  { id: 2, username: "manager@gmail.com", password: "1", name: "Nam" },
  { id: 3, username: "employee@gmail.com", password: "1", name: "Trung " },
  { id: 4, username: "user@gmail.com", password: "1", name: "Thành" },
];
