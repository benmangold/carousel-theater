import styled from 'styled-components';

const CenterDiv = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  margin: auto;
`;

const BannerWrapper = styled.div`
  width: 100%;
  position: fixed;
  margin: 0 auto;
  overflow: auto;
  display: inline-block;
  max-height: 75vh;
`;

export { CenterDiv, BannerWrapper };
