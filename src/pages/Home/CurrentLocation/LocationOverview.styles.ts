import styled from 'styled-components';

// Unit Props: Props for the unit changer from C TO F, to make the active unit brighter
interface UnitProps {
  active: boolean;
}

const Wrapper = styled.div`
  height: 17rem;
  margin: 3rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const WeatherIcon = styled.div`
  flex-basis: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImg = styled.img`
  width: 12rem;
  height: 12rem;
`;

const Details = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LocationName = styled.h1`
  font-size: 4rem;
`;

const WeatherDetails = styled.div`
  display: flex;
`;

const Item = styled.div`
  font-size: 1.6rem;
  margin-right: 6rem;
`;

const Key = styled.span`
  font-weight: 600;
  display: inline-block;
  margin-right: 1rem;
`;

const Value = styled.span`
  font-style: italic;
  text-transform: capitalize;
`;

const Temperature = styled.div`
  flex-basis: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TempVal = styled.h1`
  font-size: 4rem;
`;

const UnitChanger = styled.div`
  transform: translateY(-3rem);
`;

const UnitButton = styled.button<UnitProps>`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  opacity: ${({ active }) => (active ? '1' : '.6')};
  background: none;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;

  &:first-child {
    border-right: 0.3rem solid #fff;
  }
`;

export {
  Wrapper,
  WeatherIcon,
  IconImg,
  Details,
  LocationName,
  WeatherDetails,
  Item,
  Key,
  Value,
  Temperature,
  TempVal,
  UnitChanger,
  UnitButton,
};
