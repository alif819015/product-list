import styled from "styled-components";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      {pageNumbers.map((number) => (
        <PageNumber key={number} onClick={() => paginate(number)}>
          {number}
        </PageNumber>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.span`
  cursor: pointer;
  margin: 0 10px 20px 0;
  font-size: 16px;
  color: rgba(113, 163, 140, 0.61);
  padding: 8px;
  background-color: #332e12;
  border-radius: 5px;
  border: 1px dotted rgba(109, 207, 161, 0.61);
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export default Pagination;
