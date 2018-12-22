/* a styled magnifying glass */
import React from 'react';

import { MagnifyingGlass } from '../styled-components/GalleryStyles.jsx';

const MAGNIFYING_GLASS_URL =
  'https://image.flaticon.com/icons/svg/181/181561.svg';

export default () => {
  return <MagnifyingGlass src={MAGNIFYING_GLASS_URL} />
}