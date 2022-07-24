import styled from "styled-components";

const Card = styled.div`
  grid-column: span 1;
  height: 12rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
`;

const CityName = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const CountryFlag = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export { Card, CityName, CountryFlag };
