import styled from 'styled-components';

interface ICard {
  weather: string;
}

const Card = styled.div<ICard>`
  grid-column: span 1;
  height: 38rem;
  background-image: ${({ weather, theme }) =>
    `linear-gradient(${theme.colors.cardsColor[weather][0]},${theme.colors.cardsColor[weather][1]})`};
  color: #fff;
  border-radius: 0.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const CityName = styled.h1`
  text-align: center;
`;

const Weather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherIcon = styled.img`
  width: 12rem;
  height: 12rem;
`;

const WeatherDescription = styled.h2`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin-top: 2rem;
  text-align: center;
`;

const TemperatureRange = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RangeItem = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;

  span {
    margin-bottom: 0.3rem;
  }
`;

export {
  Card,
  CityName,
  Weather,
  WeatherIcon,
  WeatherDescription,
  TemperatureRange,
  RangeItem,
};
