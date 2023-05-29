import styled from "styled-components";

export const PersonCardWrapper = styled.div`
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const PersonImage = styled.img`
  object-fit: contain;
  width: 2rem;
  height: 2rem;
`;