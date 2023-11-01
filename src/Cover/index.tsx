import React from "react";
import styled from "styled-components";
import RotatingText from "./RotatingText";

const words = [
  "engineer ⚙️",
  "designer 🧑‍💻",
  "student 📚",
  "photographer 📸",
  "friend 🤝",
  "adventurer 🎒",
];
const initialAnimationTime = 2;
const regularAnimationTime = 10;

const CoverBackground = styled.div<{ initialAnimationTime: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 90vh;
  background-color: var(--pink);
  width: 100%;

  animation-name: fadeIn;
  animation-duration: 1s;
  animation-delay: ${({ initialAnimationTime }) => `${initialAnimationTime}s`};
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    0% {
      height: 100vh;
    }
    100% {
      height: 50vh;
    }
  }
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 8vh;
`;

const CoverTextTop = styled.h1`
  margin-left: 10vw;
  font-size: 3rem;
  font-weight: 100;
  margin-bottom: 6px;
  line-height: 10px;
`;

const CoverTextBottom = styled.h1`
  margin-left: 10vw;
  font-size: 3rem;
  font-weight: 300;
  display: inline;
`;

const HeavyText = styled.span`
  font-weight: 900;
`;

const Cover: React.FC = () => {
  return (
    <CoverBackground initialAnimationTime={initialAnimationTime}>
      <CoverContainer>
        <CoverTextTop>morning, ☀️</CoverTextTop>
        <CoverTextBottom>
          i&rsquo;m{"\u00A0"}
          <HeavyText>kieron</HeavyText>, and i&rsquo;m a{"\u00A0"}
          <HeavyText>
            <RotatingText
              words={words}
              initialAnimationTime={initialAnimationTime}
              regularAnimationTime={regularAnimationTime}
            />
          </HeavyText>
        </CoverTextBottom>
      </CoverContainer>
    </CoverBackground>
  );
};

export default Cover;
