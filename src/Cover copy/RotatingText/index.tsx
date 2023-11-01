import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface RotatingTextProps {
  words: string[];
}

const TextContainer = styled.span`
  position: relative;
  bottom: 3px;
  overflow: hidden;
  height: 90px; // Adjusted the height to match the height of a single word
`;

const TextSpan = styled.span<{ position: number }>`
  position: absolute;
  top: ${({ position }) => position}px;
  opacity: ${({ position }) => (position === 0 ? 1 : 0)};
  visibility: ${({ position }) => (position === 0 ? "visible" : "hidden")};
  transition:
    top 1s ease-in-out,
    opacity 1s ease-in-out,
    visibility 1s ease-in-out;
  white-space: nowrap;
`;

const RotatingText: React.FC<RotatingTextProps> = ({ words }) => {
  const [positions, setPositions] = useState(
    words.map((_, index) => index * 50)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map(
          (pos) => (pos <= -50 ? (words.length - 2) * 50 : pos - 50) // Recalculate the position
        )
      );
    }, 2000); // 2000 ms delay between each animation frame

    return () => {
      clearInterval(intervalId);
    };
  }, [words.length]);

  return (
    <TextContainer>
      {words.map((word, index) => (
        <TextSpan key={index} position={positions[index]}>
          {word}
        </TextSpan>
      ))}
    </TextContainer>
  );
};

export default RotatingText;
