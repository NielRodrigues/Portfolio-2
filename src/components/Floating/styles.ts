import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;

  div.plane1{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    img{
      height: 20px;
      width: auto;
      opacity: 0.2;
      position: absolute;

      &:nth-child(1) {
        left: 8%;
        top: 10%;
      }

      &:nth-child(2) {
        left: 54%;
        bottom: 17%;
      }

      &:nth-child(3) {
        left: 88%;
        bottom: 25%;
      }
    }
  }

  div.plane2{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    img{
      height: 20px;
      width: auto;
      opacity: 0.2;
      position: absolute;

      &:nth-child(1) {
        left: 40%;
        top: 5%;
      }

      &:nth-child(2) {
        left: 87%;
        top: 8%;
      }

      &:nth-child(3) {
        left: 5%;
        bottom: 18%;
      }

    }
  }

  div.plane3{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    img{
      height: 20px;
      width: auto;
      opacity: 0.2;
      position: absolute;

      &:nth-child(1) {
        left: 65%;
        top: 12%;
      }

      &:nth-child(2) {
        left: 32%;
        bottom: 13%;
      }

      &:nth-child(3) {
        left: 74%;
        bottom: 22%;
      }

    }
  }
`;