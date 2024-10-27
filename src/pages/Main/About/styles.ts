import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  // background: linear-gradient(to top, ${({ theme }) => theme.colors.background1}, ${({ theme }) => theme.colors.black});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

export const Card = styled.div`
  width: calc(100% - 256px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to top, ${({ theme }) => theme.colors.black}, ${({ theme }) => theme.colors.gray900}, ${({ theme }) => theme.colors.gray900});
  height: auto;
  border-radius: 8px;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  div.content{
    width: calc(100%);
    border-radius: 8px;
    padding: 48px;
    background-color: ${({ theme }) => theme.colors.background2};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h1 span{
      color: ${({ theme }) => theme.colors.primary};
    }

    div.line-card{
      width: 100%;
      display: flex;
      gap: 48px;
      height: auto;

      img{
        width: 40%;
        border-radius: 6px;
      }

      div.text{
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;

        h3{
          color: ${({ theme }) => theme.colors.gray200};
          font-weight: 400;
          margin-top: -2px;
        }

        div.language{
          display: flex;
          gap: 8px;
          
          img{
            height: 40px;
            width: auto;
            border-radius: 2px;
          }

          div.tl{
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
        }
      }
    }
  }
`;

export const Button = styled.a`
  height: 40px;
  border-radius: 8px;
  padding: 0 32px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryVariant});
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 2;
  width: fit-content;
  cursor: pointer;

  span{
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }

  svg{
    width: 16px;
    height: 16px;

    path{
      fill: ${({ theme }) => theme.colors.text};
    }
  }

  
`;