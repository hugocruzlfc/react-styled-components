import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  padding: 262px 0;
  /* padding-top: 290px;
  padding-bottom: 29px; */
  background: #101522;
  text-align: center;
  color: #fff;
`;

export const Nav = styled(Link)`
  color: #fff;
  /* justify-self: flex-end; */
  cursor: pointer;
  /* text-decoration: none; */
  font-size: 2rem;
  /* display: flex; */
  align-items: center;
  z-index: 50;

  &:hover {
    color: lightblue;
  }
`;
