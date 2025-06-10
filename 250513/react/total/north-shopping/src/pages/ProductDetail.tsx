import { useEffect, useState } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import { Product } from "../types/ProductType";
import axios from "axios";
import "./scss/productDetail.scss";
import { useStore } from "../store/useStore";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addCart } = useStore();

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  console.log(product);
  if (!product) return <div>로딩중...</div>;

  return (
    <div className="container">
      <Title title="상품상세페이지" />
      <div className="content-inner">
        <div className="product-detail">
          <div className="img-box">
            <img src={product?.image} alt="" />
          </div>
          <div className="text-box">
            <p className="category-name">{product?.category}</p>
            <h2 className="title">{product?.title}</h2>
            <div className="rating">★ {product.rating.rate}</div>
            <p className="price">${product?.price}</p>
            <p>{product.description}</p>
            <div className="btn">
              <button className="white-btn" onClick={() => addCart(product)}>
                장바구니 담기
              </button>
              <button className="black-btn">구매하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
