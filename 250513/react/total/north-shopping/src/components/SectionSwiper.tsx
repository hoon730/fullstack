import React from "react";
import { Product } from "../types/ProductType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const SectionSwiper = ({ category }: { category: Product[] }) => {
  return (
    <div className="goods-list">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={24}
      >
        {category.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/product/${item.id}`}>
              <ProductCard sendItem={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionSwiper;
