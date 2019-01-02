import styled from 'styled-components';

const Button = styled.img`
  input:focus {
    outline: none;
  }
  z-index: 3;
  position: absolute;
  margin: 0 auto;
  left: 0%;
  height: ${props => (props.size ? props.size : '64px')};
  width: ${props => (props.size ? props.size : '64px')};
  opacity: 0.1;
`;

const ButtonLeft = styled(Button)`
  :hover {
    opacity: 0.7;
  }
  top: 39%;
  left: 4%;
`;

const ButtonRight = styled(Button)`
  :hover {
    opacity: .7;
  }
  top: 39%;
  left: 90%
  transform: rotate(180deg);
  `;

const ButtonUp = styled(Button)`
  z-index: 4;
  transform: rotate(90deg);
`;

const ButtonExit = styled(Button)`
  z-index: 3;
  float: right;
  height: 40px;
  width: 40px;
  display: inline-block;
  top: 2vh
  left:85vw
  opacity:.5
  :hover {
    opacity: 1;
  }
`;

export { ButtonLeft, ButtonRight, ButtonExit, ButtonUp };
