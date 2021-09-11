import React from "react";
import styled from "styled-components";
import img from "../images/vegetables.png";

function Header() {
  return (
    <Container>
      <Img src={img} alt="logo" />
      <H1>Chef</H1>
    </Container>
  );
}
export default Header;

const Container = styled.div`
  display: flex;
  margin-left: 40px;
  background-image: linear-gradient(to right, white, white, #ecffec, #003b00);
`;
const Img = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 10px;
`;
const H1 = styled.h1`
  margin-left: 5px;
  color: #003b00;
`;
