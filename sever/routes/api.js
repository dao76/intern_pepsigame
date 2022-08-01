var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const productController = require("../compoments/products/controller");
const mygiftController = require("../compoments/mygift/controller")
router.post("/dang-nhap", async function (req, res, next) {
  const { username, password } = req.body;
  console.log("username = " + username);

  // tiến hành đăng nhập

  const user = await userController.login(username, password);
  // await có tác dung là chờ nó chờ nó lấy
  // await thì phải có async

  if (user) {
    const token = jwt.sign({ id: user._id, username: user.username, numberexchange: user.numberexchange, numberfree: user.numberfree, coin: user.coin }, 'mykey')

    // nếu thành công thì chuyển qua sản phẩm
    res.json({ status: true, id: user._id, username: user.username, numberexchange: user.numberexchange, numberfree: user.numberfree, coin: user.coin, token })
  } else {
    // nếu không thành công
    res.json({ status: false })

  }
  console.log(user);
});

//http://localhost:3000/api/dang-ky
router.post("/dang-ky", async function (req, res, next) {
  const { username, password, name } = req.body;
  const user = await userController.register(username, password, name);
  if (user) {
    res.json({ status: true })
  } else {
    res.json({ status: false })
  }
});


//http://localhost:3000/api/products
router.get("/products", async function (req, res, next) {
  const products = await productController.getProducts();
  res.json(products);
});
router.post('/insert_my_Gift', async (req, res, next) => {
  const { name, price, image, hvt, phone, address, note, id_user } = req.body
  const result = await mygiftController.insert({ name, price, image, hvt, phone, address, note, id_user })
  if (result) {
    return res.status(200).json({ status: 200, error: false })
  }
  res.status(200).json({ status: 200, error: true })
})
router.post('/get_all_mygift_by_id', async (req, res, next) => {
  const { id_user } = req.body
  const mygift = await mygiftController.getMyGiftByUser(id_user)
  if (mygift != null) {
    res.status(200).json({ status: 200, error: false, data: mygift })
  } else {
    res.status(200).json({ status: 200, error: false, data: [] })
  }
})
router.post('/update_coin', async (req, res, next) => {
  const { id, coin } = req.body
  const update = await userController.updatecoin(id, coin)
  console.log(id, coin);
})
router.post('/update_luot', async (req, res, next) => {
  const { id, numberexchange } = req.body
  const update = await userController.updateplay(id, numberexchange)

})
router.post('/update_free_number', async (req, res, next) => {
  const { id, numberfree } = req.body
  const update = await userController.updatefreeplay(id, numberfree)

})


module.exports = router;