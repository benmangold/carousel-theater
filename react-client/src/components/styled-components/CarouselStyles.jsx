import styled from 'styled-components';

/* used by product gallery */
const CarouselImage = styled.img`
  display: inline-block;
  margin: auto;
  width: 120px;
  float: left;
  position: relative;
  padding: 5px;
`;


/* used by overlay library */
const CarouselSection = styled.section`
  padding-left: 24px;
  padding-right: 24px;
`;

const CarouselWrapper = styled.div`
  display: block;
  box-sizing: inherit;
`;

const CarouselImageWrapper = styled.div`
  overflow-x: scroll;
  -webkit-flex: 1;
  position: fixed;
  bottom: 3%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  clear: both;
`;

export {
  CarouselSection,
  CarouselWrapper,
  CarouselImage,
  CarouselImageWrapper,
};
