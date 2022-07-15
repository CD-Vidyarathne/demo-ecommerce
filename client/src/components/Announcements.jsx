import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Announcements = () => {
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nulla.
    </Container>
  );
};

export default Announcements;

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ padding: "2px 4px" })}
`;
