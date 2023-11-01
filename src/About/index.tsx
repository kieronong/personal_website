import React from "react";
import styled, { keyframes } from "styled-components";
import profile from "./profile.jpg";
import PolaroidCard, { type PolaroidCardProps } from "./PolaroidCard";

const cards: PolaroidCardProps[] = [
  {
    src: profile,
    title: "making a bouquet 💐",
  },
];

const About: React.FC = () => {
  const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: var(--light-pink);
    padding: 80px 10vw 80px 10vw;
    gap: 50px;
    text-align: left;
  `;

  const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    justify-content: flex-start;
  `;

  const AboutTitle = styled.h1`
    margin: 0;
    font-size: 3rem;
    font-weight: 900;
  `;

  const DescriptionText = styled.p`
    font-size: 1rem;
    margin: 0;
    font-weight: 300;
    line-height: 2.2rem;
  `;

  const Bold = styled.span`
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1rem;
  `;

  const BoldName = styled.span`
    font-weight: 800;
    font-size: 1rem;
  `;

  const RoleCard = styled.span<{ backgroundColor: string }>`
    background-color: ${(props) => props.backgroundColor};
    font-weight: 700;
    display: inline-block;
    padding: 0px 10px 0px 10px;
    border-radius: 100px; // Add this line to round the corners
    box-shadow: 5px 5px 0px 0px #000000;
    position: relative;
    top: -1px;
    transition: transform 0.2s ease-in-out;
    &:hover {
      color: ${(props) =>
        props.backgroundColor === "var(--dark-pink)" ? "white" : "inherit"};
      transform: translateY(-5px);
      cursor: pointer;
    }
  `;

  const ListContainer = styled.ul`
    list-style-type: circle;
    margin: 20px 20px 40px 20px;
  `;

  const ListPoint = styled.li`
    margin-bottom: 10px;
  `;

  return (
    <AboutContainer>
      {cards.map((card, index) => (
        <PolaroidCard key={index} src={card.src} title={card.title} />
      ))}
      <DescriptionContainer>
        <AboutTitle>hello there 👋</AboutTitle>
        <DescriptionText>
          my name is <BoldName>kieron ong</BoldName>, and i'm your friendly
          neighbourhood:
          <ListContainer>
            <ListPoint>
              <RoleCard backgroundColor="var(--dark-pink)">
                software engineer ⚙️
              </RoleCard>
              {"\u00A0"}
              {"\u00A0"} with experience working on test engineering at{" "}
              <Bold>Etsy</Bold> and full-stack development at{" "}
              <Bold>Bill.com</Bold>.
            </ListPoint>
            <ListPoint>
              <RoleCard backgroundColor="var(--dark-pink)">
                frontend geek 🧑‍💻
              </RoleCard>
              {"\u00A0"}
              {"\u00A0"} as an intern at <Bold>Confluent</Bold> and designing
              beautiful interfaces in my spare time for mobile and web.
            </ListPoint>
            <ListPoint>
              <RoleCard backgroundColor="var(--dark-pink)">
                full-time student 📚
              </RoleCard>
              {"\u00A0"} {"\u00A0"} at <Bold>UC Berkeley</Bold>, as a senior
              majoring in CS.
            </ListPoint>
          </ListContainer>
          in my spare time, i'm also an avid{" "}
          <RoleCard backgroundColor="var(--white)">adventurer 🎒</RoleCard>{" "}
          {"\u00A0"}and{" "}
          <RoleCard backgroundColor="var(--white)">photographer 📸</RoleCard>,
          and I love to explore and capture the wild spaces of the great
          American West.
        </DescriptionText>
      </DescriptionContainer>
    </AboutContainer>
  );
};

export default About;
