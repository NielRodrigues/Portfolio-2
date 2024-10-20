import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import background from "../../../assets/images/background1.jpg"

export const Container = styled.div`
  height: calc(100vh - 64px);
  min-height: calc(100vh - 64px);
  width: calc(100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 48px;
  gap: 16px;
  position: relative;
  
  h1, h3, h4{
    text-align: center;
    margin: 0;
    z-index: 2;
  }

  h4{
    color: ${({ theme }) => theme.colors.gray200};
    margin-top: 128px;
  }

  h3{
    color: ${({ theme }) => theme.colors.gray100};
  }

  h1{

    font-size: 48px;

    span{
      background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryVariant});
      -webkit-background-clip: text;
      color: transparent;
      background-clip: text;
    }
  }

  div.line{
    display: flex;
    align-items: center;
    gap: 24px;
    z-index: 2;
    flex-wrap: wrap;
    width: 70%;
    max-width: 512px;
    justify-content: center;
  }
`;
