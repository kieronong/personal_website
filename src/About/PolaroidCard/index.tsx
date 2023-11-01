import React, { useState, useEffect } from "react";
import styled from "styled-components";

export interface PolaroidCardProps {
  src: string;
  title: string;
}

const PolaroidFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  aspect-ratio: 3.5/4.2;
  max-width: 30vw;
  padding: 20px 20px 0px 20px;
  box-shadow: 5px 5px 0px 0px #000000;
`;

const ProfilePic = styled.img`
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
`;

const PolaroidTitle = styled.h1`
  font-size: 2rem;
  margin: auto;
  font-weight: 300;
  font-family: "La Belle Aurore";
`;

const PolaroidCard: React.FC<PolaroidCardProps> = ({ src, title }) => {
  return (
    <PolaroidFrame>
      <ProfilePic src={src} />
      <PolaroidTitle>{title}</PolaroidTitle>
    </PolaroidFrame>
  );
};

export default PolaroidCard;
