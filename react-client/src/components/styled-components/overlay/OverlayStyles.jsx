import styled from 'styled-components';

const OverlayContainer = styled.div`
  height: 100%;
  width: 100%;
  display: ${props => (props.overlay ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`;

const Button = styled.input`
input:focus{
  outline: none;
}
z-index: 3;
height: 17%
position: absolute;
top: 39%;
opacity: 0.1;
`;

const ButtonLeft = styled(Button)`
  :hover {
    opacity: 1;
  }
  left: 4%;
`;

const ButtonRight = styled(Button)`
  left: 90%
  transform: rotate(180deg);
  :hover {
    opacity: 1;
  }
`;

const ButtonExit = styled.input`
  z-index: 3;
  height: 44px;
  float: right;
  position: absolute ;
  display: block;
  top: 3%
  left:93%
  opacity:.5
  :hover {
    opacity: 1;
  }
`;

const OverlayHeader = styled.div`
  padding-top: 10px;
  height: 40px;
  margin: 0 10px 10px;
`;

export { OverlayContainer, ButtonLeft, ButtonRight, ButtonExit, OverlayHeader };
