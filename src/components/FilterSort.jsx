import { useState, useEffect } from "react";
import styled from "styled-components";

const FilterSort = ({ products, setFilteredProducts }) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  const handleFilter = (category) => {
    setCategoryFilter(category);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    filterProducts(categoryFilter, sortOption);
  }, [categoryFilter, sortOption]);

  const filterProducts = (category, sortOption) => {
    let filteredProducts = [...products];

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
    switch (sortOption) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "title-asc":
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    setFilteredProducts(filteredProducts);
  };

  return (
    <Container>
      <FilterSection>
        <label>Filter by Category:</label>
        <select
          value={categoryFilter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">All</option>
          {[...new Set(products.map((product) => product.category))].map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </FilterSection>

      <SortSection>
        <label>Sort by:</label>
        <select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="title-asc">Title (A to Z)</option>
          <option value="title-desc">Title (Z to A)</option>
        </select>
      </SortSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 70px;
  @media only screen and (max-width: 320px) {
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 360px) {
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 411px) {
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 1024px) {
    padding: 5px 0;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 1280px) {
    padding: 5px 0;
    display: flex;
    flex-direction: column;
  }
`;

const FilterSection = styled.div`
  label {
    margin-right: 10px;
    font-weight: bold;
    color: white;
  }

  select {
    padding: 5px;
    border-radius: 5px;
    background-color: #c7c6c6;
  }
`;

const SortSection = styled.div`
  label {
    margin-right: 10px;
    font-weight: bold;
    color: white;
  }

  select {
    padding: 5px;
    border-radius: 5px;
    background-color: #c7c6c6;
  }
`;

export default FilterSort;
