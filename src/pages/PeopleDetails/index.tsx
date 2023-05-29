import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, PageButton, PeoplePageWrapper } from './styles';
import { PersonImage } from '../../components/PersonCard/styles';
import { DataContext } from '../../context/DataProvider';
import { DataContextType } from '../../context/interface';

export function PeopleDetails() {
  const { data } = React.useContext(DataContext) as DataContextType;
  const navigate = useNavigate();

  return (
    <PeoplePageWrapper>
      <PageButton onClick={() => navigate(-1)}>Back</PageButton>
      <CardWrapper>
        <PersonImage src="/user.png" />
        <div>
          <p>Name: {data?.name}</p>
          <p>Gender: {data?.gender}</p>
          <p>Mass: {data?.mass}</p>
          <p>Height: {data?.height}</p>
          <p>Home World: {data?.homeworld}</p>
        </div>
      </CardWrapper>
    </PeoplePageWrapper>
  );
}
