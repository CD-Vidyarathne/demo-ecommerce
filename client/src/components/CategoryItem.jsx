import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Link to={`/products/${category.cat}`}>
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>
          {/* <Button>SHOP NOW</Button> */}
        </Info>
      </Link>
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
  border: 1px solid white;
  box-shadow: 0px 5px 10px white;
  background-color: #0000007f;
  padding: 5px;
`;
// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: white;
//   cursor: pointer;
//   color: grey;
//   border: 2px solid transparent;
//   &:hover {
//     border: 2px solid grey;
//   }
// `;
