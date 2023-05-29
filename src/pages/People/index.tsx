import * as React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PEOPLE_LIST } from '../../graphql/query';
import {
  PeoplePageWrapper,
  SearchInput,
} from './styles';
import { useDebounce } from '../../hooks/useDebounce';
import { PeopleGrid } from './components/PeopleGrid';

export const People = () => {
  const [page, setPage] = React.useState(1);
  const {
    loading, error, data, refetch,
  } = useQuery(GET_PEOPLE_LIST, {
    variables: {
      page: page.toString(),
      search: '',
    },
  });

  const handleSearch = useDebounce<React.ChangeEvent<HTMLInputElement>>(
    ({ target: { value } }) => refetch({
      search: value,
    }),
    300,
  );

  const handleNext = () => {
    if (data?.people?.next) {
      setPage(page + 1);
    }
  };
  const handlePrevious = () => {
    if (data.people.previous) {
      setPage(page - 1);
    }
  };
  return (
    <PeoplePageWrapper>
      <>
        <SearchInput placeholder="Search" onChange={handleSearch} />
        <PeopleGrid
          loading={loading}
          error={error?.message}
          data={data}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </>
    </PeoplePageWrapper>
  );
};
