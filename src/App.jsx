import styled from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Banner>
        <Navbar></Navbar>
        <ProductList></ProductList>
      </Banner>
      <Footer></Footer>
    </>
  );
}

export default App;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(97, 6, 77, 0.568)),
    url("../public/bacground.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
