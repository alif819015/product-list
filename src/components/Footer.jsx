import styled from "styled-components";


const Footer = () => {
    return (
        <FooterContainer>
        <p>&copy; 2023 Product List. All Rights Reserved.</p>
      </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #365e83;
  color: white;
  text-align: center;
  padding: 20px;
  width: 100%;
`;