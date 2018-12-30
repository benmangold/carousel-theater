import React from 'react';

import {
  ScrollOverContainer,
  ScrollOverContent,
} from '../styled-components/ScrollOverStyles.jsx';

// default scroll-over content
const MAGNIFYING_GLASS_URL =
  'https://image.flaticon.com/icons/svg/181/181561.svg';
export default class ScrollOverProvider extends React.Component {
  render() {
    return React.Children.toArray(this.props.children).map((child, index) => {
      return (
        <ScrollOverContainer key={index}>
          <ScrollOverContent zIndex={this.props.zIndex} size={this.props.size}>
            {this.props.render ? (
              this.props.render()
            ) : (
              <img src={MAGNIFYING_GLASS_URL} />
            )}
          </ScrollOverContent>
          {child}
        </ScrollOverContainer>
      );
    });
  }
}
