import styled from 'styled-components'

export const Container = styled.a`
  height: 32px;
  border-radius: 5px;
  padding: 0 0px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryVariant});
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 2;


  div.bg{
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    margin-top: 0.5px;
    background-color: ${({ theme }) => theme.colors.background2};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 24px;
    border-radius: 4px;
    transition: all .4s;


    span{
      color: ${({ theme }) => theme.colors.text};
      font-size: 14px;
    }

    svg{
      width: 20px;
      height: 20px;

      path{
        stroke: ${({ theme }) => theme.colors.text};
      }
    }
  }

  &:hover{
    div.bg{
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryVariant});
    }
  }


  
`;