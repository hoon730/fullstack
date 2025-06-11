import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Product } from "../types/ProductType";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const SectionBigSwiper = ({ category }: { category: Product[] }) => {
  return (
    <div className="goods-list-big">
      <Swiper
        modules={[Navigation, Grid, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        grid={{ rows: 2, fill: "row" }}
        scrollbar={{
          draggable: true,
        }}
      >
        {category.map((item) => (
          <SwiperSlide>
            <Link to={`/product/${item.id}`}>
              <ProductCard sendItem={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionBigSwiper;
