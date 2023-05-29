import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../../context/DataProvider';
import { DataContextType, IData } from '../../../context/interface';
import { PageButton, PageButtonWrapper, PeopleGridWrapper } from '../styles';
import { PersonCard } from '../../../components/PersonCard';
import NoData from '../../../components/NoData';
import { IPeopleGrid } from '../interface';
import Loader from '../../../components/Loader';

export const PeopleGrid: React.FC<IPeopleGrid> = ({
  loading,
  error,
  data,
  handlePrevious,
  handleNext,
}) => {
  const navigate = useNavigate();
  const { holdData } = React.useContext(DataContext) as DataContextType;

  if (loading) return <Loader />;
  if (error) return <p>Error : {error}</p>;

  const navigation = (person: IData) => {
    holdData(person);
    navigate(`/people/${person.name}`);
  };
  return (
    <>
      <PeopleGridWrapper>
        {data.people.results.map((person: IData) => (
          <PersonCard
            key={person.name}
            name={person.name}
            onClick={() => navigation(person)}
          />
        ))}
      </PeopleGridWrapper>
      <PageButtonWrapper>
        {data.people.previous && (
          <PageButton onClick={handlePrevious}>Prev</PageButton>
        )}
        {data.people.next && <PageButton onClick={handleNext}>Next</PageButton>}
      </PageButtonWrapper>
      {data.people.results.length === 0 && <NoData />}
    </>
  );
};
