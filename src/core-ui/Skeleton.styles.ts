import styled, { keyframes } from 'styled-components'

const MoveSkeleton = keyframes`
 0% {
    background-color: #dbdbdb;
  }
  100% {
    background-color: #e7e7e7;
  }
  
`

const Skeleton = styled.div`
  height: 100%;
  animation: ${MoveSkeleton} 1s linear infinite alternate;

  &.grid {
    grid-column: span 1;
    height: 38rem;
  }
`

export default Skeleton
