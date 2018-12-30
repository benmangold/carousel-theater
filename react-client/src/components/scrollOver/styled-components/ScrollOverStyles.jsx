import styled from 'styled-components';

const ScrollOverContainer = styled.div`
  position: relative;
`;

const ScrollOverContent = styled.div`
  z-index: ${props => props.zIndex ? props.zIndex : 0}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: ${props => props.size ? props.size: '64px'};
  width: ${props => props.size ? props.size: '64px'};
  opacity: 0;
  ${ScrollOverContainer}:hover & {
    opacity: 1;
  }
`;

export { ScrollOverContent, ScrollOverContainer };
