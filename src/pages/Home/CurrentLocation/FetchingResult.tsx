/* eslint-disable react/jsx-boolean-value */

import React, { ReactElement } from 'react';
import useQuery from 'hooks/useQuery';
import { Position } from 'interfaces';
import { LAT_LON_API_URL } from 'constants/index';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Skeleton from 'core-ui/Skeleton.styles';
import LocationOverview from './LocationOverview';

interface IProps {
  location: Position;
}

const FetchingResult = ({ location }: IProps): ReactElement => {
  const { lat, lon } = location;
  const { data, error } = useQuery({
    url: LAT_LON_API_URL,
    params: { lat, lon },
  });

  if (error) return <ErrorMessage message={error.message} />;

  if (!data) return <Skeleton />;

  return <LocationOverview city={data.data} />;
};

export default FetchingResult;
