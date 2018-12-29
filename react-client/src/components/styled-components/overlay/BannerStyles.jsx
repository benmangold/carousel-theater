import styled from 'styled-components';

const CenterDiv = styled.div`
  position: relative;
  display: block;
  margin: auto;
`;


const BannerContainer = styled.div`
  position: relative;
  justify-content: center;
  max-height: 65vh;
`;

const BannerWrapper = styled.span`
  width: 100%;
  position: fixed;
  margin: 0 auto;
  top: 20%;
  display: inline-block;
  box-sizing: inherit;
`;

export { CenterDiv, BannerContainer, BannerWrapper };
