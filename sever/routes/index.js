/**
 * router: giống như là ngươi điều hướng , quyết dịnh cái gì sẽ diễn ra tiếp theo
 */
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const authentication = require('../ui/authentication');


router.get("/dang-nhap", function (req, res, next) {
  res.render("login");
});
router.get("/index", function (req, res, next) {
  res.render("index");
});

router.get("/profile", function (req, res, next) {
  res.render("profile");
});
// /**

router.post("/login", async function (req, res, next) {
  const { username, password } = req.body;
  console.log("username = " + username);

  // tiến hành đăng nhập

  const user = await userController.login(username, password);
  // await có tác dung là chờ nó chờ nó lấy
  // await thì phải có async

  if (user) {
    const token = jwt.sign({ id: user._id, username: user.username }, 'mykey')
    req.session.token = token;
    // nếu thành công thì chuyển qua sản phẩm
    res.redirect("/index");
  } else {
    // nếu không thành công
    res.redirect("/dang-nhap");
  }
});

/**
 * http://localhost:3000/dang-xuat
 * method: get
 * desc: tiến hành đăng xuất, thành công chuyển qua đăng nhập
 */
router.get("/dang-xuat", [authentication.checklogin], function (req, res, next) {
  req.session.destroy(function (err) {
    res.redirect("/dang-nhap");

  })
  // nếu thành công thì chuyển đăng nhập

});

module.exports = router;
