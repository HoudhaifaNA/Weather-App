import styled from "styled-components";

const Wrapper = styled.div`
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoName = styled.h1`
  font-size: 1.8rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  & span {
    font-weight: 400;
  }
`;

export { Wrapper, LogoName };
