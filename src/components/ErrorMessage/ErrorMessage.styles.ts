import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &.grid {
    grid-column: span 4;
  }
`;

const ErrorIcon = styled.svg`
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem;
  fill: ${({ theme }) => theme.colors.errorRed};
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

export { Wrapper, ErrorIcon, Title, Message };
