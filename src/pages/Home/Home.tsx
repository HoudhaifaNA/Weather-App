/* eslint-disable no-unused-vars */
import React from 'react';

import { Wrapper, SectionTitle } from './Home.styles';

import SearchBar from './SearchBar/SearchBar';
import CurrentLocation from './CurrentLocation/CurrentLocation';
import SavedCities from './SavedCities/SavedCities';
import SearchedCities from './SearchedCities/SearchedList';

const Home = () => (
  <Wrapper>
    <SearchBar />
    <CurrentLocation />
    <SectionTitle>My locations:</SectionTitle>
    <SavedCities />

    {/* <SearchedCities /> */}
  </Wrapper>
);
export default Home;
