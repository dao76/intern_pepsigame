/**
 * service tầng goa tiếp db
 * */

/**
 *  descriptionL lấy danh sách sản phẩm
 */
const productmodel = require('./model');
exports.getProducts = async () => {
  // return data;
  return await productmodel.find()
};
/**
 *  descriptionL lấy sản phẩm theo Id
 */
exports.getProductById = async (id) => {
  // const product = data.filter((item) => item._id == id)[0];
  // return product;
  return productmodel.findById(id)

};


/**
 * thêm mới sp vào db
 */
exports.insert = async (product) => {
  // data.push(product);
  const p = new productmodel(product);
  await p.save();

}
exports.update = async (id, product) => {
  // data = data.map(item => {
  //   if(item._id == id){
  //     item ={...item, ...product}
  //   }
  //   return item;
  // }) 
  await productmodel.findOneAndUpdate(id, product);
}


/**
 * xóa sp
 */
exports.delete = async (id) => {
  // data = data.filter(item => item._id != id);
  await productmodel.findByIdAndDelete(id);

}



var data = [
  {
    _id: 1,
    name: "iphone 11",
    price: "16.290.00",
    quantity: 1,
    description:
      "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",

    category_id: {
      _id: 1,
      name: "Iphone",
      description:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg",
    released: "2022-02-24",
  },
  {
    _id: 2,
    name: "Iphone 13 Pro Max",
    price: "33.900.000",
    quantity: 1,
    description:
      "Màn hình 6.7, Chip Apple A15 Bionic     RAM 6 GB, ROM 128 GB",
    category_id: {
      _id: 1,
      name: "Iphone",
      description:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    released: "2021-06-04",
  },
  {
    _id: 3,
    name: "Iphone 13 Pro max màu xanh lá",
    price: "33.900.000",
    quantity: 1,
    description:
      "Màn hình 6.7, Chip Apple A15 Bionic RAM 6 GB, ROM 128 GB",
    category_id: {
      _id: 1,
      name: "Iphone",
      description:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/274153/iphone-13-pro-max-xanh-la-thumb-600x600.jpg",
    released: "2022-02-19",
  },
  {
    _id: 4,
    name: "Samsung Galaxy Z Fold3",
    price: "36.290.00",
    quantity: 1,
    description:
      "Màn hình Chính 7.6 & Phụ 6.2, Chip Snapdragon 888     RAM 12 GB, ROM 256 GB",
    category_id: {
      _id: 2,
      name: "Sam Sung",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
    released: "2022-01-23",
  },
  {
    _id: 5,
    name: "iphone 11",
    price: "16.290.00",
    quantity: 1,
    description:
      "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",

    category_id: {
      _id: 1,
      name: "Iphone",
      description:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg",
    released: "2022-02-24",
  },
  {
    _id: 6,
    name: "Iphone 13 Pro Max",
    price: "33.900.000",
    quantity: 1,
    description:
      "Màn hình 6.7, Chip Apple A15 Bionic     RAM 6 GB, ROM 128 GB",
    category_id: {
      _id: 1,
      name: "Iphone",
      description:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    released: "2021-06-04",
  },
  {
    _id: 7,
    name: "Iphone 13 Pro max màu xanh lá",
    price: "33.900.000",
    quantity: 1,
    description:
      "Màn hình 6.7, Chip Apple A15 Bionic RAM 6 GB, ROM 128 GB",
    category_id: {
      _id: 1,
      name: "Iphone",
      description:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/274153/iphone-13-pro-max-xanh-la-thumb-600x600.jpg",
    released: "2022-02-19",
  },
  {
    _id: 8,
    name: "Samsung Galaxy Z Fold3",
    price: "36.290.00",
    quantity: 1,
    description:
      "Màn hình Chính 7.6 & Phụ 6.2, Chip Snapdragon 888     RAM 12 GB, ROM 256 GB",
    category_id: {
      _id: 2,
      name: "Sam Sung",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
    released: "2022-01-23",
  },
  {
    _id: 9,
    name: "Iphone 13 Pro max màu xanh lá",
    price: "33.900.000",
    quantity: 1,
    description:
      "Màn hình 6.7, Chip Apple A15 Bionic RAM 6 GB, ROM 128 GB",
    category_id: {
      _id: 1,
      name: "Iphone",
      description:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/274153/iphone-13-pro-max-xanh-la-thumb-600x600.jpg",
    released: "2022-02-19",
  },
  {
    _id: 10,
    name: "Samsung Galaxy Z Fold3",
    price: "36.290.00",
    quantity: 1,
    description:
      "Màn hình Chính 7.6 & Phụ 6.2, Chip Snapdragon 888     RAM 12 GB, ROM 256 GB",
    category_id: {
      _id: 2,
      name: "Sam Sung",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
    released: "2022-01-23",
  },
  {
    _id: 11,
    name: "Iphone 13 Pro max màu xanh lá",
    price: "33.900.000",
    quantity: 1,
    description:
      "Màn hình 6.7, Chip Apple A15 Bionic RAM 6 GB, ROM 128 GB",
    category_id: {
      _id: 1,
      name: "Iphone",
      description:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/274153/iphone-13-pro-max-xanh-la-thumb-600x600.jpg",
    released: "2022-02-19",
  },
  {
    _id: 12,
    name: "Samsung Galaxy Z Fold3",
    price: "36.290.00",
    quantity: 1,
    description:
      "Màn hình Chính 7.6 & Phụ 6.2, Chip Snapdragon 888     RAM 12 GB, ROM 256 GB",
    category_id: {
      _id: 2,
      name: "Sam Sung",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    },
    image: "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
    released: "2022-01-23",
  },

];
