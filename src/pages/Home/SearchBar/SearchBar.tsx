import React from 'react'

import { SearchInput, Wrapper } from 'pages/Home/SearchBar/SearchBar.styles'

const SearchBar = () => (
  <Wrapper>
    <SearchInput type='text' placeholder='Search for any city' />
  </Wrapper>
)

export default SearchBar
