import React, { ReactElement } from 'react';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Skeleton from 'core-ui/Skeleton.styles';
import useQuery from 'hooks/useQuery';
import { CITIES_GROUP_API_URL } from 'constants/index';
import { City } from 'interfaces';
import CityItem from './CityItem';

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
const url = CITIES_GROUP_API_URL;

export default ([...citiesIDs]: number[]): ReactElement[] | ReactElement => {
  const id = citiesIDs.join(',');
  const { data, error } = useQuery({ url, params: { id } });

  if (error) return <ErrorMessage className='grid' message={error.message} />;

  if (!data) return skeletons.map(el => <Skeleton className='grid' key={el} />);

  const { list } = data.data;
  return list.map((city: City) => <CityItem city={city} key={city.id} />);
};
