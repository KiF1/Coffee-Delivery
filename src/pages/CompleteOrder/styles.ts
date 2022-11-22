import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 768px){
    max-width: 100%;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  @media (max-width: 768px){
    padding: 1rem;
    }
`;
