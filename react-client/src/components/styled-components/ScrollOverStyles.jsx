import styled from 'styled-components';

const ScrollOverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ScrollOverContent = styled.div`
margin: 0 auto;
float: left;
  z-index: ${props => (props.zIndex ? props.zIndex : 0)}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: ${props => (props.size ? props.size : '10vw')};
  width: ${props => (props.size ? props.size : '10vw')};
  opacity: 0;
  ${ScrollOverContainer}:hover & {
    opacity: 1;
  }
`;

export { ScrollOverContent, ScrollOverContainer };
