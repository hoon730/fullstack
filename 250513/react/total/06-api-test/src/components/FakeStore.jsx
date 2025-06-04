import React, { useState, useEffect } from "react";
import axios from "axios";
const categories = [
  "all",
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];

const FakeStore = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const axiosItems = async () => {
      try {
        const url =
          selectedCategory === "all"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${selectedCategory}`;
        const response = await axios.get(url);
        console.log(response);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosItems();
  }, [selectedCategory]);

  return (
    <div className="fakeStore">
      <ul>
        {categories.map((ca) => (
          <li onClick={() => setSelectedCategory(ca)}>{ca}</li>
        ))}
      </ul>
      <div>
        <h2>{selectedCategory === "all" ? "모든 제품" : selectedCategory}</h2>
        <ul className="goodsList">
          {items.map((item) => (
            <li>
              <h3>{item.title}</h3>
              <p>
                <img src={item.image} alt={item.title} />
              </p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FakeStore;
