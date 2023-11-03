import styled from "styled-components";

const ProductItem = ({ product }) => {
  const { title, description, price, imageUrl } = product;

  return (
    <Container>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>${price}</Price>
    </Container>
  );
};

const Container = styled.div`
  background: rgba(113, 163, 140, 0.61);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 8px;
  padding: 20px;
  margin: 0 10px;
  width: 250px;
  transition: transform 0.2s ease-in-out;
  @media only screen and (max-width: 320px) {
    margin-top: 3rem;


    @media only screen and (max-width: 320px) {
      margin-top: 1rem;
  }
  @media only screen and (min-width: 360px) {
    margin-top: 1rem;
  }

  @media only screen and (min-width: 411px) {
    margin-top: 1rem;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 1rem;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 2rem;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 3rem;
  }
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-weight: bold;
`;

export default ProductItem;
