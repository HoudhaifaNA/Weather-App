import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  min-height: 90vh;
  height: 90vh;
  overflow-y: scroll;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

export { Wrapper, SectionTitle };
