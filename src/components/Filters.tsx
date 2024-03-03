import { useEffect, useState } from "react";
import "./card.css";
import { Product } from "./Cards";

type FilterProps = {
  productsData: Product[];
  showAll: () => void;
  filterByBrand: (value: string) => void;
  filterByGender: (value: string) => void;
};

export const Filters = ({
  productsData,
  showAll,
  filterByBrand,
  filterByGender,
}: FilterProps) => {
  const [brandFilters, setBrandFilters] = useState<any[]>([]);

  const constructAllBrandFilters = () => {
    const uniqueBrands: string[] = [];

    productsData.forEach((product: Product) => {
      if (!uniqueBrands.includes(product.brand)) {
        uniqueBrands.push(product.brand);
      }
    });

    setBrandFilters(uniqueBrands);
  };

  useEffect(() => {
    constructAllBrandFilters();
  }, [productsData]);

  const CountBadge = ({ count = 0 }) => (
    <span className="count-badge">{count}</span>
  );

  return (
    <aside className="filters-container" style={{ marginRight: "20px" }}>
      <h2>Bikes</h2>
      <h3>Filter by:</h3>
      <div
        style={{
          width: "100%",
          paddingBottom: "10px",
          borderBottom: "1px solid lightgray",
        }}
      >
        <button
          type="button"
          className="filter-button"
          onClick={() => {
            showAll();
          }}
        >
          Show all
          <CountBadge count={productsData.length} />
        </button>
      </div>

      <div
        style={{
          width: "100%",
          paddingBottom: "10px",
          borderBottom: "1px solid lightgray",
        }}
      >
        <h4 style={{ textAlign: "left" }}>Gender</h4>
        <div className="row">
          <button
            type="button"
            className="filter-button"
            onClick={() => {
              filterByGender("MALE");
            }}
          >
            Male
            <CountBadge
              count={
                productsData.filter(
                  (product: Product) => product.gender === "MALE"
                ).length
              }
            />
          </button>
        </div>

        <button
          type="button"
          className="filter-button"
          onClick={() => {
            filterByGender("FEMALE");
          }}
        >
          Female
          <CountBadge
            count={
              productsData.filter(
                (product: Product) => product.gender === "FEMALE"
              ).length
            }
          />
        </button>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <h4 style={{ textAlign: "left" }}>Brand</h4>

        {brandFilters.map((brandFilter, i) => {
          return (
            <button
              type="button"
              key={i}
              className="filter-button"
              onClick={() => filterByBrand(brandFilter)}
            >
              {brandFilter}

              <CountBadge
                count={
                  productsData.filter(
                    (product: Product) => product.brand === brandFilter
                  ).length
                }
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};
