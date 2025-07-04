const { where } = require("sequelize");
const { Product } = require("../models");
/*
Product.create() : 삽입
Product.findAll() : 전체 조회 / findByPk() - pk로 조회 / findOne() -> 조회
Product.update() : 수정 
Product.destroy() : 삭제
=> 모든 메서드는 Promise 기반이므로 async/await 사용 가능
 */

exports.createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    console.log("newProduct", newProduct);
    const prod = await Product.create(newProduct);
    console.log("prod", prod);
    res.status(200).json(prod);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const prodList = await Product.findAll();
    res.status(200).json(prodList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// api/products/1
exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "잘못된 요청입니다." });
    const prod = await Product.findByPk(id);
    if (!prod)
      return res.status(404).json({ message: "존재하지 않는 상품입니다." });
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete/api/products/1
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.destroy({ where: { id } });
    if (result === 0) {
      return res.json({ result: "fail", message: "없는 상품입니다." });
    }
    res.json({
      result: "success",
      message: `${id}번 상품정보를 삭제했습니다.`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const [result] = await Product.update(product, { where: { id } });
    console.log("result", result);
    res.json({
      result: "success",
      message: `${id}번 상품 정보를 수정했습니다.`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
