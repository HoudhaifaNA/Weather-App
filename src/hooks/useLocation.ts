/* eslint-disable no-undef */
import { Dispatch, useEffect, useState, SetStateAction } from 'react';

import getPosition from 'helpers/getPosition';
import { PositionState } from 'interfaces/index';

type SetLocation = Dispatch<SetStateAction<PositionState['location']>>;
type SetError = Dispatch<SetStateAction<PositionState['error']>>;

const onSuccess =
  (setLocation: SetLocation) => (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setLocation({ lat: latitude, lon: longitude });
  };

const onError = (setError: SetError) => (error: GeolocationPositionError) => {
  setError(error);
};

const useLocation = () => {
  const [location, setLocation] = useState<PositionState['location']>(null);
  const [error, setError] = useState<PositionState['error']>(null);

  useEffect(() => {
    getPosition(onSuccess(setLocation), onError(setError));
  }, []);

  return { location, error };
};

export default useLocation;
