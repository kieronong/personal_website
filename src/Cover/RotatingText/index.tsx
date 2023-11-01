import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface RotatingTextProps {
  words: string[];
  initialAnimationTime: number;
  regularAnimationTime: number;
}

const TextContainer = styled.span`
  position: relative;
  bottom: 14px;
  overflow: hidden;
  height: 90px; // Adjusted the height to match the height of a single word
`;

const TextSpan = styled.span<{
  position: number;
  animationTime: number;
}>`
  position: absolute;
  top: ${({ position }) => position}px;
  opacity: ${({ position }) => (position === 0 ? 1 : 0)};
  visibility: ${({ position }) => (position === 0 ? "visible" : "hidden")};
  transition: ${({ animationTime }) =>
    `top ${animationTime}s ease-in-out, opacity ${animationTime}s ease-in-out, visibility ${animationTime}s ease-in-out`};
  white-space: nowrap;
  background-color: var(--white);
  padding: 10px 30px 10px 30px;
  border-radius: 100px; // Add this line to round the corners
  box-shadow: 5px 5px 0px 0px #000000;
`;

const RotatingText: React.FC<RotatingTextProps> = ({
  words,
  initialAnimationTime,
  regularAnimationTime,
}) => {
  const [positions, setPositions] = useState(
    words.map((_, index) => index * 50)
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId: number = 0;
    if (count < words.length - 1) {
      intervalId = setInterval(
        () => {
          setPositions((prevPositions) =>
            prevPositions.map(
              (pos) => (pos <= -50 ? (words.length - 2) * 50 : pos - 50) // Recalculate the position
            )
          );
          setCount(count + 1);
        },
        (initialAnimationTime / words.length) * 1000
      );
    } else if (count === words.length - 1) {
      if (count < words.length) {
        intervalId = setInterval(
          () => {
            setPositions((prevPositions) =>
              prevPositions.map(
                (pos) => (pos <= -50 ? (words.length - 2) * 50 : pos - 50) // Recalculate the position
              )
            );
            setCount(count + 1);
          },
          (initialAnimationTime / words.length) * 4000
        );
      }
    } else {
      intervalId = setInterval(
        () => {
          setPositions((prevPositions) =>
            prevPositions.map(
              (pos) => (pos <= -50 ? (words.length - 2) * 50 : pos - 50) // Recalculate the position
            )
          );
          setCount(count + 1);
        },
        (regularAnimationTime / words.length) * 1000
      );
    }

    console.log(initialAnimationTime / words.length);
    console.log(regularAnimationTime / words.length);

    return () => {
      clearInterval(intervalId);
    };
  }, [words.length, count]);

  return (
    <TextContainer>
      {words.map((word, index) => (
        <TextSpan
          key={index}
          position={positions[index]}
          animationTime={
            count < words.length
              ? initialAnimationTime / (words.length * 2)
              : regularAnimationTime / (words.length * 2)
          }
        >
          {word}
        </TextSpan>
      ))}
    </TextContainer>
  );
};

export default RotatingText;
