import styled from 'styled-components';

export const PeoplePageWrapper = styled.div`
  padding: 5rem 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  line-height: 1.5;
  margin: 0;
  &:hover {
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  }
  width: 50%;
  height: 4rem;
  padding-left: 3rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0.6rem 1.3rem;
  background-size: 1.5rem;
  position: relative;
  @media screen and (max-width: 712px) {
    width: 80%
  }
`;

export const PeopleGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  gap: 1rem;
  margin-top: 4rem;
  @media screen and (max-width: 712px) {
    width: 80%;
     grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

export const PageButton = styled.button`
  box-shadow: none;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 0.8rem 1rem;
  cursor: pointer;
  align-self: flex-end
`;

export const PageButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  gap: 1rem;
  width: 50%;
  @media screen and (max-width: 712px) {
    width: 80%
  }
`;
