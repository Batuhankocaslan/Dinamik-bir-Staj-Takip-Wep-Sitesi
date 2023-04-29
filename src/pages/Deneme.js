import React, { useState } from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";
import UserCards from "../components/userCards";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";

const StyledAboutPage = styled.div`
  padding: 50px;
`;

const Deneme = () => {
  
 
  return (
    <StyledAboutPage>
  
    <UserCards />
    </StyledAboutPage>
  );
};
export default withLayout(Deneme);