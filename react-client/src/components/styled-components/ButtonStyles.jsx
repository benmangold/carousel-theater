
import styled from 'styled-components'

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
  opacity: .7;
}
top: 39%;
left: 4%;
`;

const ButtonRight = styled(Button)`
:hover {
  opacity: .7;
}
left: 92%
top: 39%;
transform: rotate(180deg);
`;

const ButtonUp = styled(Button)`
z-index: 4;
transform: rotate(90deg);
`;

const ButtonExit = styled.input`
z-index: 3;
height: 44px;
float: right;
position: absolute;
display: block;
top: 3%
left:93%
opacity:.5
:hover {
  opacity: 1;
}
`;

export {
  ButtonLeft,
  ButtonRight,
  ButtonExit,
  ButtonUp,
};
