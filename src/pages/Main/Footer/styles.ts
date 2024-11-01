import styled from 'styled-components'

export const Container = styled.footer`
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  // background: linear-gradient(to top, ${({ theme }) => theme.colors.background1}, ${({ theme }) => theme.colors.black});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 128px;
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  gap: 48px;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray900};
  border-top: 1px solid ${({ theme }) => theme.colors.gray900};
  justify-content: space-between;


  &:first-child{
    border-bottom: none;
  }

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

  div.social-media{
    display: flex;
    align-items: center;
    gap: 12px;

    a.media{
      height: 40px;
      width: 40px;
      min-width: 40px;
      border-radius: 4px;
      text-decoration: none;
      background: linear-gradient(to top, ${({ theme }) => theme.colors.background2}, ${({ theme }) => theme.colors.gray900});
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .4s;

      svg{
        height: 28px;
        width: 28px;

        path{
          fill: ${({ theme }) => theme.colors.gray300};
          transition: all .4s;
        }
      }

      &:hover svg path{
        fill: ${({ theme }) => theme.colors.text};
      }
    }
  }

`;

export const Col = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3{
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 8px;
  }
`;

export const Button = styled.a`
  border-radius: 8px;
  width: fit-content;
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray900};
  text-decoration: none;
  gap: 8px;
  
  svg{
    height: 20px;
    width: 20px;

    path{
      fill: ${({ theme }) => theme.colors.text};
    }
  }

  span{
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  &.wpp{
    background-color: #00FFAB;
  }
`;

