import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0 20px 0;
  width: 100vw;
  flex-direction: row;
  justify-content: flex-end;
  background-color: var(--pink);
  z-index: 1;
`;

const BarItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  margin-right: 20px;
  padding: 10px 30px 13px 30px;
  border-radius: 100px; // Add this line to round the corners
  font-weight: 500;
  &:hover {
    background-color: var(--white);
    margin-left: 10.3px;
    box-shadow: 5px 5px 0px 0px #000000;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const Spacer = styled.div<{ x: number }>`
  width: ${({ x }) => x}px;
`;

const TopBar: React.FC = () => {
  return (
    <BarContainer>
      <BarItem>about me</BarItem>
      <BarItem>my work</BarItem>
      <BarItem>my adventures</BarItem>
      <BarItem>my people</BarItem>
      <Spacer x={50} />
    </BarContainer>
  );
};

export default TopBar;
