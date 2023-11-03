import { useState } from "react";
import styled from "styled-components";
import FilterSort from "./FilterSort";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";

const productsData = [
  {
    id: 1,
    title: "Apple 14 pro",
    description:
      "As of my last update in January 2022, there is no information on the iPhone 14. Stay tuned to the official Apple website or reliable tech news sources for updates",
    price: 130,
    category: "phone",
    imageUrl: "../../public/product/iphone14.jpg",
  },

  {
    id: 2,
    title: "MacBook Pro",
    description:
      "The MacBook Pro, renowned for its powerful performance, sleek design, and brilliant Retina display, is a premium laptop by Apple. Ideal for professionals, it excels in creative tasks and multitasking.",
    price: 260,
    category: "laptop",
    imageUrl: "../../public/product/laptop.jpg",
  },

  {
    id: 3,
    title: "Apple 14 pro",
    description:
      "As of my last update in January 2022, there is no information on the iPhone 14. Stay tuned to the official Apple website or reliable tech news sources for updates",
    price: 330,
    category: "phone",
    imageUrl: "../../public/product/iphone14.jpg",
  },

  {
    id: 4,
    title: "MacBook Pro",
    description:
      "The MacBook Pro, renowned for its powerful performance, sleek design, and brilliant Retina display, is a premium laptop by Apple. Ideal for professionals, it excels in creative tasks and multitasking.",
    price: 270,
    category: "laptop",
    imageUrl: "../../public/product/laptop.jpg",
  },

  {
    id: 5,
    title: "Apple 14 pro",
    description:
      "As of my last update in January 2022, there is no information on the iPhone 14. Stay tuned to the official Apple website or reliable tech news sources for updates",
    price: 910,
    category: "phone",
    imageUrl: "../../public/product/iphone14.jpg",
  },

  {
    id: 6,
    title: "MacBook Pro",
    description:
      "The MacBook Pro, renowned for its powerful performance, sleek design, and brilliant Retina display, is a premium laptop by Apple. Ideal for professionals, it excels in creative tasks and multitasking.",
    price: 130,
    category: "laptop",
    imageUrl: "../../public/product/laptop.jpg",
  },

  {
    id: 7,
    title: "Apple 14 pro",
    description:
      "As of my last update in January 2022, there is no information on the iPhone 14. Stay tuned to the official Apple website or reliable tech news sources for updates",
    price: 330,
    category: "phone",
    imageUrl: "../../public/product/iphone14.jpg",
  },

  {
    id: 8,
    title: "MacBook Pro",
    description:
      "The MacBook Pro, renowned for its powerful performance, sleek design, and brilliant Retina display, is a premium laptop by Apple. Ideal for professionals, it excels in creative tasks and multitasking.",
    price: 20,
    category: "laptop",
    imageUrl: "../../public/product/laptop.jpg",
  },

  {
    id: 9,
    title: "Apple 14 pro",
    description:
      "As of my last update in January 2022, there is no information on the iPhone 14. Stay tuned to the official Apple website or reliable tech news sources for updates",
    price: 330,
    category: "phone",
    imageUrl: "../../public/product/iphone14.jpg",
  },

  {
    id: 10,
    title: "MacBook Pro",
    description:
      "The MacBook Pro, renowned for its powerful performance, sleek design, and brilliant Retina display, is a premium laptop by Apple. Ideal for professionals, it excels in creative tasks and multitasking.",
    price: 220,
    category: "laptop",
    imageUrl: "../../public/product/laptop.jpg",
  },

  {
    id: 11,
    title: "Apple 14 pro",
    description:
      "As of my last update in January 2022, there is no information on the iPhone 14. Stay tuned to the official Apple website or reliable tech news sources for updates",
    price: 10,
    category: "phone",
    imageUrl: "../../public/product/iphone14.jpg",
  },

  {
    id: 12,
    title: "MacBook Pro",
    description:
      "The MacBook Pro, renowned for its powerful performance, sleek design, and brilliant Retina display, is a premium laptop by Apple. Ideal for professionals, it excels in creative tasks and multitasking.",
    price: 10,
    category: "laptop",
    imageUrl: "../../public/product/laptop.jpg",
  },

  {
    id: 13,
    title: "Apple 14 pro",
    description:
      "As of my last update in January 2022, there is no information on the iPhone 14. Stay tuned to the official Apple website or reliable tech news sources for updates",
    price: 170,
    category: "phone",
    imageUrl: "../../public/product/iphone14.jpg",
  },

  {
    id: 14,
    title: "MacBook Pro",
    description:
      "The MacBook Pro, renowned for its powerful performance, sleek design, and brilliant Retina display, is a premium laptop by Apple. Ideal for professionals, it excels in creative tasks and multitasking.",
    price: 220,
    category: "laptop",
    imageUrl: "../../public/product/laptop.jpg",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <FilterSort
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductContainer>
        {currentProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductContainer>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
`;

export default ProductList;
