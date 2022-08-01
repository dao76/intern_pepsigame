var express = require("express");
var router = express.Router();

const productController = require("../compoments/products/controller");

const authentication = require('../ui/authentication')
const upload = require("../middle/upload");
// install

/**
 * http://localhost:3000/san-pham/
 * method: get
 * desc: hiển thị danh sách sản phẩm
 */
router.get("/", async function (req, res, next) {
  // lấy danh sách sản phẩm từ database và hiển thị
  const data = await productController.getProducts();


  res.render("products", { products: data });
  //hiển thị(render)
});


/**
 * http://localhost:3000/san-pham/
 * method: post
 * desc: thêm mới 1 sản phẩm
 * middleware: tần trung gian sử lý tất cả thao tác trước khi vô hàm ở trong (up hình ,bắt lỗi ,ktra login....)
 */
router.post("/", [upload.single('image')], async function (req, res, next) {
  // thêm mới sp vào db
  let { body, file } = req;
  let image = '';
  if (file) {
    image = `http://192.168.1.6:3000/images/${file.filename}`
  }
  body = { ...body, image }


  // dấu... có td: thêm 1 thuốc tính vô thêm , đưa thuộc tính hình vào trong body
  await productController.insert(body);

  res.redirect("/san-pham");
  //chuyển lại trang sản phẩm 
});

/**
 * http://localhost:3000/san-pham/them-moi
 * method: get
 * desc: hiển thị trang them mới sản phẩm
 */
router.get("/them-moi", [], async function (req, res, next) {
  // lấy danh sách của danh mục

  res.render("product_insert");

  //hiển thị(render)
});



/**
 * http://localhost:3000/san-pham/:id/edit
 * method: get
 * desc: hiển thị chi tiết 1 sản phẩm
 */
router.get("/:id/edit", async function (req, res, next) {
  // lấy 1 sản phẩm từ database và hiển thị
  const { id } = req.params;

  // lấy thông tin chi tiết của sản phẩm
  const product = await productController.getProductById(id);
  // lấy danh sách các danh mục

  res.render("product_edit", { product: product });
  //hiển thị(render)
});

/**
 * http://localhost:3000/san-pham/:id/edit
 * method: put
 * desc: hiển thị chi tiết 1 sản phẩm
 */
// router.put("/:id/edit", function (req, res, next) {
//   // update 1 sản phẩm vào db

//   res.render("products", {});
//   //hiển thị(render)
// });

/**
 * http://localhost:3000/san-pham/:id/delete
 * method: delete
 * desc: xóa 1 sản phẩm
 */
router.delete("/:id/delete", async function (req, res, next) {
  // xóa 1 sản phẩm
  const { id } = req.params;
  await productController.delete(id);

  res.json({ result: true });
  // trả về kết quả xóa

});

router.post('/:id/edit', [upload.single('image')], async function (req, res, next) {
  // update 1 sản phẩm vào db

  let { body, file, params } = req;
  delete body.image;
  if (file) {
    let image = `http://192.168.1.6:3000/images/${file.filename}`
    body = { ...body, image }
  }

  // dấu... có td: thêm 1 thuốc tính vô thêm , đưa thuộc tính hình vào trong body
  await productController.update(params.id, body);
  res.redirect('/san-pham')
});

router.get("/thong-ke", function (req, res, next) {
  // thống kê sản phẩm

  res.render("products", {});
  //hiển thị(render)
});

// không được xóa cái này quan trọng
module.exports = router;
