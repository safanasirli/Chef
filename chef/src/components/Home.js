import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Home() {
  const history = useHistory();
  const handleRoute = () => {
    history.push("/recipe");
  };
  return (
    <div>
      <Header />
      <Main>
        <H1>Enjoy Cooking</H1>
        <H2>Browse Though Over 2.3 Million Tasty Recipes</H2>
        <Button onClick={handleRoute}>Start Browsing</Button>
      </Main>
    </div>
  );
}

export default Home;

const Main = styled.main`
  width: 100%;
  height: 100vh;
`;
const H1 = styled.h1`
  font-size: 50px;
  padding-top: 10%;
  color: #002700;
`;
const H2 = styled.h2`
  font-size: 35px;
  padding-top: 5px;
  color: #002700;
`;
const Button = styled.button`
  background-color: #002700;
  margin-top: 10px;
  color: white;
  font-size: 20px;
  font-weight: 800;
  height: 60px;
  width: 250px;
  border-radius: 5%;
  border: none;
  cursor: pointer;
`;
