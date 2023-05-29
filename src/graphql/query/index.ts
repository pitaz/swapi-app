import { gql } from '@apollo/client';

export const GET_PEOPLE_LIST = gql`
  query ($limit: Int, $page: String, $search: String) {
  people(limit: $limit, page: $page, search: $search) {
    count
    next
    previous
    results {
      name
      height
      mass
      gender
      homeworld
    }
  }
}
`;