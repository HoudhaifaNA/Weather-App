/* eslint-disable no-undef */

const getLocation = (
  handleSuccess: PositionCallback,
  handleError: PositionErrorCallback
) => {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
};
export default getLocation;
