import React, { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { data, sliderSettings } from "../../data";
import { Row, Heading, Section, TextWrapper } from "../../globalStyles";
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from "./styles";
import Slider from "react-slick";

export interface CarouselProps {}

export const Carousel: React.FC<CarouselProps> = ({}) => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <Section
      margin="auto"
      maxWidth="1280px"
      padding="50px 70px"
      inverse
    >
      <Row
        justify="space-between"
        margin="1rem"
        wrap="wrap"
      >
        <Heading
          width="auto"
          inverse
        >
          Find more about us
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "3rem", color: "#1d609c" }}>
            <FaArrowCircleLeft onClick={sliderRef?.current?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.current?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider
        {...sliderSettings}
        ref={sliderRef}
      >
        {data.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} />
            <TextWrapper
              size="1.1rem"
              margin="0.4rem 0 0"
              weight="bold"
            >
              {el.title}
            </TextWrapper>
            <TextWrapper
              size="0.9rem"
              margin="0.7rem"
              color="#4f4f4f"
            >
              {el.description}
            </TextWrapper>
            <CardButton>Learn More</CardButton>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};
