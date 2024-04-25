const db = require("../models/index");
const { Op } = require("sequelize");
const { sequelize } = require("../config/db");
const { v4: uuid } = require("uuid");
const path = require("path");
// const fs = require("fs");

class ProductService {
  async getProduct({
    page = 1,
    pageSize = 10,
    sort = 1,
    name = "",
    cate_Id = null,
  }) {
    try {
      const offset = (page - 1) * pageSize;
      const options = {
        limit: pageSize,
        offset: offset,
        order: sort === 1 ? [["price", "ASC"]] : [["price", "DESC"]],
        where: {},
      };
      if (cate_Id) {
        options.where.category_id = cate_Id;
      }
      if (name) {
        options.where.name = { [Op.substring]: name };
      }

      const products = await db.Product.findAll(options);
      const totalProducts = await db.Product.count();

      const totalPages = Math.ceil(totalProducts / pageSize);

      return { products, totalPages, currentPage: page };
    } catch (error) {
      throw new Error("Failed to retrieve products");
    }
  }

  // async createProducts(data) {
  //   try {
  //     const result = await sequelize.query(
  //       `EXEC sp_sanpham_create @category_id = :category_id, @title = :title, @price = :price, @discount = :discount, @thumbnail = :thumbnail, @description = :description, @created_at = :created_at, @list_json_ct_sanpham = :list_json_ct_sanpham`,
  //       {
  //         replacements: {
  //           category_id: data.category_id,
  //           title: data.title,
  //           price: data.price,
  //           discount: data.discount,
  //           thumbnail: data.thumbnail,
  //           description: data.description,
  //           created_at: data.created_at,
  //           list_json_ct_sanpham: JSON.stringify(data.list_json_ctsanpham),
  //         },
  //         type: sequelize.QueryTypes.SELECT,
  //       }
  //     );

  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async createProducts(req) {
    try { 
      const thumbnail = req.files.thumbnail;
      const thumbs = req.files.thumb;
      const data = req.body;
      // console.log(req.files);
      // console.log(req.body);
      const list_json_ctsanpham = []
      let splitname = thumbnail.name.split(".");
      let newName = splitname[0] + uuid() + "." + splitname[splitname.length - 1];
      thumbnail.mv(path.join(__dirname, "..","..","..", "vite-project", "public", "images", newName));
      //thumbnail.mv(path.join(__dirname, "vite-project", "public", "images", newName));

      if (thumbs != null) {
        for (let i = 0; i < thumbs.length; i++) {
          const thumb = thumbs[i];
          let splitThumb = thumb.name.split(".");
          let newThumb = splitThumb[0] + uuid() + "." + splitThumb[splitThumb.length - 1];
          thumb.mv(path.join(__dirname, "..", "/uploads", newThumb));
          list_json_ctsanpham.push({
            thumb: newThumb,
            color: req.body.color[i],
          })
        }
      }
      console.log(list_json_ctsanpham);
      const result = await sequelize.query(
        `EXEC sp_sanpham_create1 @category_id = :category_id, @title = :title, @price = :price, @discount = :discount, @thumbnail = :thumbnail, @description = :description, @list_json_ct_sanpham = :list_json_ct_sanpham`,
        {
          replacements: {
            category_id: data.category_id,
            title: data.title,
            price: data.price,
            discount: data.discount,
            thumbnail: newName,
            description: data.description,
            list_json_ct_sanpham: JSON.stringify(list_json_ctsanpham),
          },
          type: sequelize.QueryTypes.SELECT,
        }
      );

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getTopProduct() {
    try {
      const bestSellerProducts = await db.Product.findAll({
        limit: 8,
        order: [["views", "DESC"]],
      });
      const latestProducts = await db.Product.findAll({
        limit: 8,
        order: [["created_at", "DESC"]],
      });

      const data = {
        bestSeller: {
          title: "SẢN PHẨM XEM NHIỀU",
          products: bestSellerProducts,
        },
        latestProducts: {
          title: "SẢN PHẨM MỚI NHẤT",
          products: latestProducts,
        },
      };
      const responseData = {
        success: true,
        message: "Lấy danh sách các danh mục thành công",
        data: data,
      };
      console.log("du lieu:", responseData);

      return responseData;
    } catch (error) {
      console.error("Error getting product data:", error);
    }
  }
  

  async getProductById(id) {
    try {
      const product = await db.Product.findByPk(id, {
        include: [
            {
                model: db.Category,
                attributes: ["name"],
            },
            {
                model: db.DetailProduct,
                attributes: ["thumbnail", "color"],
            },
        ],
        nest: true,
        raw: true,
    });

    if (!product) {
        throw new Error('Product not found');
    }

    // Lấy tất cả các chi tiết sản phẩm có productId bằng id của sản phẩm
    const detailProducts = await db.DetailProduct.findAll({
        where: {
            product_id: id
        },
        attributes: ["thumbnail", "color"]
    });

    // Gán mảng chi tiết sản phẩm vào sản phẩm
    product.DetailProducts = detailProducts;

    return product;
    } catch (error) {
      console.error("Error getting product data:", error);
      throw error; 
    }
  }
  
  
}

module.exports = new ProductService();
