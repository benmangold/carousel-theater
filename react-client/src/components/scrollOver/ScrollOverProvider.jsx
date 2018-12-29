import React from 'react';

import MagnifyingGlass from './MagnifyingGlass.jsx'

import {ScrollOverContainer} from './styled-components/ScrollOverStyles.jsx'
// const ScrollOverContainer = styled.div`
//   position: relative;
// `;

export default class ScrollOverProvider extends React.Component {
  render() {
    return React.Children.toArray(this.props.children).map((child, index) => {
      return (
        <ScrollOverContainer>
          {this.props.render ? this.props.render() : <MagnifyingGlass/>}
          {child}
        </ScrollOverContainer>
      )
    })
  }
}