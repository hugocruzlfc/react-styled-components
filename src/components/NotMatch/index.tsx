import React from "react";
import { Section, Nav } from "./styles";
import { Container } from "../../globalStyles";

export const NotMatch: React.FC = () => {
  return (
    <Section>
      <Container>
        <h1>Ups!</h1>
        <h2>Nothing to see here!</h2>
        <p>
          <Nav to="/">Go to the home page</Nav>
        </p>
      </Container>
    </Section>
  );
};
