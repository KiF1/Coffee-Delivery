import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`;

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media(max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 500px) {
    grid-template-columns: 1fr;
    width: 85%;
    margin: auto;
    padding-top: 3rem;
  }
`;
