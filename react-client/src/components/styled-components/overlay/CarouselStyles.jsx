import styled from 'styled-components';

const CarouselSection = styled.section`
  padding-left: 24px;
  padding-right: 24px;
`;

const CarouselWrapper = styled.div`
  display: block;
  box-sizing: inherit;
`;

const CarouselImage = styled.img`
  display: inline-block;
  position: relative;
  margin: auto;
  width: 120px;
  float: left;
  padding: 5px;
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
