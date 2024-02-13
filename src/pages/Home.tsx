import React from "react";
import { Hero, Carousel, Features, Content } from "../components";
import { heroOne, heroTwo, heroThree } from "../data/";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};
