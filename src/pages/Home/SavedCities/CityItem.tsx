/* eslint-disable camelcase */
import React from 'react';

import {
  Card,
  CityName,
  RangeItem,
  TemperatureRange,
  Weather,
  WeatherDescription,
  WeatherIcon,
} from 'pages/Home/SavedCities/CityItem.styles';
import getWeatherIcon from 'helpers/getWeatherIcon';
import { City } from 'interfaces';

interface IProps {
  city: City;
}

const CityItem = ({ city }: IProps) => {
  const { description, main, icon } = city.weather[0];
  const { temp_max, temp_min } = city.main;

  return (
    <Card weather={main}>
      <CityName>{city.name}</CityName>
      <Weather>
        <WeatherIcon src={getWeatherIcon(icon)} alt={description} />
        <WeatherDescription>{description}</WeatherDescription>
      </Weather>
      <TemperatureRange>
        <RangeItem>
          <span>{Math.round(temp_min)}&#8451;</span>
          <span>Min</span>
        </RangeItem>
        <RangeItem>
          <span>{Math.round(temp_max)}&#8451;</span>
          <span>Max</span>
        </RangeItem>
      </TemperatureRange>
    </Card>
  );
};

export default CityItem;
