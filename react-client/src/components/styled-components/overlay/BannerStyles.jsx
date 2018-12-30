import styled from 'styled-components';

const CenterDiv = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  margin: auto;
`;

const BannerContainer = styled.div`
  position: relative;
  justify-content: center;
  max-height: 65vh;
`;

const BannerWrapper = styled.div`
  width: 100%;
  position: fixed;
  margin: 0 auto;

  overflow: auto;
  top: 15%;
  display: inline-block;
  box-sizing: inherit;
  max-height: 50vh;
  max-width: 100vw;
`;

export { CenterDiv, BannerContainer, BannerWrapper };
