import { useCallback, useEffect, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import styled from "styled-components";

const ImageLayout = styled.div`
  color: var(--color-grey-0);
  width: 100%;
  font-weight: 300;
  border-radius: 10px;
  margin: auto;
  outline: 2px solid var(--color-grey-100);
  position: relative;
  overflow: hidden;
  height: 100%;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .description {
    height: 100%;
  }
`;

const ImageSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ translateX }) => `translateX(${translateX}%)`};
`;

const ImageWrapper = styled.div`
  flex: 0 0 100%;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  /* border-radius: 10px; */
  transition: transform 0.3s ease;
`;

const Description = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  transition: height 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), var(--color-red-700));
  opacity: 0.8;
  color: white;

  & h3 {
    font-weight: 600;
    margin: 5px 0;
    font-size: 25px;
  }

  & p {
    font-weight: 500;
    font-size: 16px;
    margin: 5px 0;
    padding: 0 3rem;
  }

  & a {
    color: var(--color-red-700);
    text-decoration: none;
    font-size: 12px;
    line-height: 28px;
    background: white;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    text-align: center;
    transition: transform 0.3s ease;
    margin-top: 10px;
  }

  & a:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 320px) {
    & h3 {
      font-weight: 500;
      margin: 1.5px 0;
      font-size: 15px;
    }

    & p {
      font-weight: 400;
      font-size: 11px;
      margin: 1.5px 0;
      padding: 0 1.2rem;
    }

    & a {
      font-size: 8px;
      width: 20px;
      height: 20px;
      line-height: 20px;
    }
  }
  @media screen and (max-width: 425px) and (min-width: 375px) {
    & h3 {
      font-weight: 500;
      margin: 1.5px 0;
      font-size: 18px;
    }

    & p {
      font-weight: 400;
      font-size: 13px;
      margin: 1.5px 0;
      padding: 0 1.2rem;
    }

    & a {
      font-size: 12px;
      width: 21px;
      height: 21px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    & h3 {
      font-weight: 500;
      margin: 1.5px 0;
      font-size: 22px;
    }

    & p {
      font-weight: 400;
      font-size: 15px;
      margin: 1.5px 0;
      padding: 0 1.2rem;
    }

    & a {
      font-size: 12px;
      width: 21px;
      height: 21px;
      line-height: 20px;
    }
  }
`;

function PortfolioCard({ images = [], description, title, link }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 10000);
    return () => clearInterval(interval);
  }, [nextImage]);

  const translateX = -currentIndex * 100;

  return (
    <ImageLayout>
      <ImageSlider translateX={translateX}>
        {images.map((src, index) => (
          <ImageWrapper key={src + index}>
            <Image src={src} alt={`Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </ImageSlider>
      <Description className="description">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopner noreferrer">
          <TbExternalLink style={{ fontSize: "17px", marginTop: "1px" }} />
        </a>
      </Description>
    </ImageLayout>
  );
}

export default PortfolioCard;
