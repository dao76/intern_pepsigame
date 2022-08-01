var express = require("express");
var router = express.Router();

const productController = require("../compoments/products/controller");
const mygiftController = require("../compoments/mygift/controller")
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
    const data = await mygiftController.getgift();

    console.log('dat ' + JSON.stringify(data));
    res.render("mygift", { gift: data });
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
    console.log('id', id);

    // lấy thông tin chi tiết của sản phẩm
    const mygift = await mygiftController.getMygiftbyid1(id);
    // lấy danh sách các danh mục

    res.render("mygift_edit", { mygift: mygift });
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
    await mygiftController.deleteee(id);

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
    await mygiftController.update(params.id, body);
    res.redirect('/mygift')
});

router.get("/thong-ke", function (req, res, next) {
    // thống kê sản phẩm

    res.render("products", {});
    //hiển thị(render)
});

// không được xóa cái này quan trọng
module.exports = router;
