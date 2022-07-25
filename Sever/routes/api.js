var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const productController = require("../compoments/products/controller");
//http://localhost:3000/api/dang-nhap
router.post("/dang-nhap", async function (req, res, next) {
  const { username, password } = req.body;
  console.log("username = " + username);

  // tiến hành đăng nhập

  const user = await userController.login(username, password);
  // await có tác dung là chờ nó chờ nó lấy
  // await thì phải có async

  if (user) {
    const token = jwt.sign({ id: user._id, username: user.username }, 'mykey')

    // nếu thành công thì chuyển qua sản phẩm
    res.json({ status: true, id: user._id, username: user.username, token })
  } else {
    // nếu không thành công
    res.json({ status: false })

  }
  console.log(user);
});

//http://localhost:3000/api/dang-ky
router.post("/dang-ky", async function (req, res, next) {
  const { username, password, name } = req.body;
  console.log("username = " + req.body.confirm_password);

  // tiến hành đăng nhập

  const user = await userController.register(username, password, name);
  // await có tác dung là chờ nó chờ nó lấy
  // await thì phải có async

  if (user) {
    res.json({ status: true })
  } else {
    // nếu không thành công
    res.json({ status: false })

  }
});


//http://localhost:3000/api/products
router.get("/products", async function (req, res, next) {
  // lấy danh sách sản phẩm từ database và hiển thị
  const products = await productController.getProducts();

  res.json(products);
  //hiển thị(render)
});

router.get("/products/:id/detail", async function (req, res, next) {
  // lấy 1 sản phẩm từ database và hiển thị
  const { id } = req.params;

  // lấy thông tin chi tiết của sản phẩm
  const product = await productController.getProductById(id);
  // lấy danh sách các danh mục


  //hiển thị(render)
});


module.exports = router;