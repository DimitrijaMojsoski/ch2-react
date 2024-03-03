import { useEffect, useState } from "react";

import { Card } from "./Card";
import { Filters } from "./Filters";
import "./card.css";

export interface Product {
  brand: string;
  gender: string;
  image: string;
  name: string;
  price: number;
}

export const Cards = ({ productsData }: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  const showAll = () => {
    setProducts(productsData);
  };

  const filterByGender = (genderFilter: string) => {
    const filteredProducts = productsData.filter(
      (product: Product) => product.gender === genderFilter
    );
    setProducts(filteredProducts);
  };

  const filterByBrand = (brandFilter: string) => {
    const filteredProducts = productsData.filter(
      (product: Product) => product.brand === brandFilter
    );
    setProducts(filteredProducts);
  };

  if (products.length < 1) {
    return <></>;
  }

  return (
    <div className="row" style={{ margin: "40px 0" }}>
      <Filters
        productsData={productsData}
        showAll={showAll}
        filterByGender={filterByGender}
        filterByBrand={filterByBrand}
      />

      <div className="cards-container">
        {products.map((product: Product, i: number) => {
          return <Card key={i} card={product} />;
        })}
      </div>
    </div>
  );
};
