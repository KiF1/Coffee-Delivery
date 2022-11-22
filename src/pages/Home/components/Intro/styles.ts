import styled from "styled-components";
import introBackgroundImg from "../../../../assets/intro-background.png";
import { TitleText } from "../../../../components/Typography";
import { rgba } from "polished";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 768px){
    height: fit-content;
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  @media(max-width: 768px){
    flex-direction: column;
    img{
      display: none;
    }
  }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
  @media(max-width: 768px){
    font-size: 1.25rem;
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
  @media(max-width: 768px){
    width: 85%;
    margin: auto;
    grid-template-columns: 1fr;
    padding-top: 1.5rem;
  }
`;
