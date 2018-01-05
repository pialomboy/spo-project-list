import styled from 'styled-components';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

const Search = styled(SearchBox)`
  flex: 1;

  input {
    background: transparent;
    border: none;
  }
`;

export default Search;