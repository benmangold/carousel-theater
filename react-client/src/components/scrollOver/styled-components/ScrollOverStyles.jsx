import styled from 'styled-components';

const ScrollOverContainer = styled.div`
  position: relative;
`;

const MagnifyingGlass = styled.img`
  z-index:4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 15%;
  width: 15%;
  opacity: 0;
  ${ScrollOverContainer}:hover & {
    opacity: 1;
  }
`;

export { ScrollOverContainer, MagnifyingGlass };
