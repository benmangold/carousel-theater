import styled from 'styled-components';

const CenterImage = styled.img`
  max-width: 80%;
  max-height: 350px;
  position: relative;
  display: block;
  margin: auto;
`;

const BannerSpacer = styled.div`
  margin-top: 10px;
`;

const BannerContainer = styled.div`
  position: relative;
  justify-content: center;
  max-height: 65vh;
`;

const BannerWrapper = styled.span`
  width: 100%;
  position: fixed;
  top: 20%;
  display: inline-block;
  box-sizing: inherit;
`;

export { BannerSpacer, BannerContainer, BannerWrapper };
