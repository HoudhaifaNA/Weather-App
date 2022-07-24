/* eslint-disable react/jsx-boolean-value */
import React from 'react';

import getWeatherIcon from 'helpers/getWeatherIcon';
import {
  Wrapper,
  Details,
  IconImg,
  Item,
  Key,
  LocationName,
  Temperature,
  TempVal,
  UnitButton,
  UnitChanger,
  Value,
  WeatherDetails,
  WeatherIcon,
} from './LocationOverview.styles';

interface City {
  name: string;
  main: { humidity: number; temp: number };
  weather: { icon: string; description: string }[];
  wind: { speed: number };
}

interface IProps {
  city: City;
}

const LocationOverview = ({ city }: IProps) => {
  const { weather, name, main, wind } = city;
  const { icon, description } = weather[0];

  return (
    <Wrapper>
      <WeatherIcon>
        <IconImg src={getWeatherIcon(icon)} alt={description} />
      </WeatherIcon>
      <Details>
        <LocationName>{name}</LocationName>
        <WeatherDetails>
          <Item>
            <Key>Weather:</Key>
            <Value>{description}</Value>
          </Item>
          <Item>
            <Key>Wind:</Key>
            <Value>{Math.round(wind.speed)}m/s</Value>
          </Item>
          <Item>
            <Key>Humidity:</Key>
            <Value>{main.humidity}%</Value>
          </Item>
        </WeatherDetails>
      </Details>
      <Temperature>
        <TempVal>{Math.round(main.temp)}</TempVal>
        <UnitChanger>
          <UnitButton active={true}>C</UnitButton>
          <UnitButton active={false}>F</UnitButton>
        </UnitChanger>
      </Temperature>
    </Wrapper>
  );
};

export default LocationOverview;
