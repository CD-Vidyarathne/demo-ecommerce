import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  position: relative;
  flex: 1;
  margin: 3px;
  height: 70vh;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  color: grey;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid grey;
  }
`;
