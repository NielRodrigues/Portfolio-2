import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const Container = styled.header`
  height: 64px;
  width: calc(100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  background-color: ${({ theme }) => theme.colors.background2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray800};

  div.logo{
    display: flex;
    align-items: center;
    gap: 8px;
    
    svg{
      width: 24px;
      height: 24px;
      
      path{
        fill: ${({ theme }) => theme.colors.gray300};
      }

      circle{
        fill: ${({ theme }) => theme.colors.gray300};
      }
    }

    span{
      font-size: 18px;
      font-style: italic;
      color: ${({ theme }) => theme.colors.gray300};
      font-weight: 400;
    }
  }

  div.menu{
    display: flex;
    gap: 16px;
    align-items: center ;

    div.links{
      display: flex;
      align-items: center;
    }

    div.line{
      width: 1px;
      height: 32px;
      background-color: ${({ theme }) => theme.colors.gray900};
      /* margin-right: 20px; */
    }
  }

`;