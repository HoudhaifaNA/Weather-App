import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SearchInput = styled.input`
  padding: 1.6rem 2rem;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  outline: none;
  &::placeholder {
    font-weight: 500;
    opacity: 0.8;
  }
`;

export { Wrapper, SearchInput };
