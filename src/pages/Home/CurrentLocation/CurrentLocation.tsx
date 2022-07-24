import React, { ReactElement } from 'react';

import useLocation from 'hooks/useLocation';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Skeleton from 'core-ui/Skeleton.styles';
import Wrapper from './CurrentLocation.styles';
import FetchingResult from './FetchingResult';

const CurrentLocation = () => {
  const { location, error } = useLocation();

  const renderResult = (): ReactElement => {
    if (error) {
      const message =
        error.code === 2 ? 'Position Unvaialablle' : error.message;
      return <ErrorMessage message={message} />;
    }

    if (!location) return <Skeleton />;

    return <FetchingResult location={location} />;
  };

  return <Wrapper>{renderResult()}</Wrapper>;
};

export default CurrentLocation;
