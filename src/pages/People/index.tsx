import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE_LIST } from "../../graphql/query";
import {
  PageButton,
  PageButtonWrapper,
  PeopleGridWrapper,
  PeoplePageWrapper,
  SearchInput,
} from "./styles";
import { useDebounce } from "../../hooks/useDebounce";
import { PersonCard } from "../../components/PersonCard";
import NoData from "../../components/NoData";
import { DataContext } from "../../context/DataProvider";
import { DataContextType, IData } from "../../context/interface";
import { useNavigate } from "react-router-dom";

export const People = () => {
  const navigate = useNavigate()
  const { holdData } = React.useContext(DataContext) as DataContextType;
  const [page, setPage] = React.useState(1);
  const { loading, error, data, refetch } = useQuery(GET_PEOPLE_LIST, {
    variables: {
      page: page.toString(),
      search: ''
    }
  });

  const handleSearch = useDebounce<React.ChangeEvent<HTMLInputElement>>(
    ({target: {value}}) => refetch({
      search: value,
    }),
    300
);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleNext = () => {
    if(data?.people?.next) {
      setPage(page+1)
    }
  }
  const handlePrevious = () => {
    if(data.people.previous) {
      setPage(page-1)
    }
  }
  const navigation = (person: IData) => {
    holdData(person);
    navigate(`/people/${person.name}`)
  }
  return (
    <PeoplePageWrapper>
      <>
        <SearchInput placeholder="Search" onChange={handleSearch}/>
       
        <PeopleGridWrapper>
          {data.people.results.map((person: IData, index: number) => (
            <PersonCard key={index} name={person.name} onClick={() => navigation(person)} />
          ))}
        </PeopleGridWrapper>
        
      </>
     
      <PageButtonWrapper>
        {data.people.previous && <PageButton onClick={handlePrevious}>Prev</PageButton>}
        {data.people.next && <PageButton onClick={handleNext}>Next</PageButton>}
      </PageButtonWrapper>
      {
          data.people.results.length === 0 && <NoData />
        }
    </PeoplePageWrapper>
  );
};
