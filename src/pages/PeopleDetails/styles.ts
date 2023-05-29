import styled from 'styled-components';

export const PeoplePageWrapper = styled.div`
  padding: 5rem 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CardWrapper = styled.div`
  width: 30%;
  margin-top: 4rem;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 712px) {
    width: 80%
  }
`;

export const PageButton = styled.button`
  box-shadow: none;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0.8rem 1rem;
  cursor: pointer;
  align-self: flex-start;
`;

export const PageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  gap: 1rem;
  width: 50%;
`;
