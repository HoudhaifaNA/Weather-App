import React from 'react';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import renderCitiesList from './FetchingResult';
import Wrapper from './SavedCities.styles';

const citiesIDs: number[] = [2844588];

const SavedCities = () => {
  if (citiesIDs.length === 0) {
    return (
      <ErrorMessage
        className='grid'
        icon='folder'
        message="You don't have any city saved yet."
      />
    );
  }

  return <Wrapper>{renderCitiesList(citiesIDs)}</Wrapper>;
};

export default SavedCities;
