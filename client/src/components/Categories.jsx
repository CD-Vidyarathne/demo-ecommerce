import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
