import React from 'react';
import { Card, CityName, CountryFlag } from './SearchedItem.styles';

const SearchedItem = () => (
  <Card>
    <CityName>Madera, DE</CityName>
    <CountryFlag>
      <img src='https://flagcdn.com/w40/za.png' alt='Belg' />
    </CountryFlag>
  </Card>
);

export default SearchedItem;
