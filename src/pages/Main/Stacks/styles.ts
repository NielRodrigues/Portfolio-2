import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background3};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 128px;
  gap: 48px;
  
  h1 span{
    color: ${({ theme }) => theme.colors.primary};
  }
  
  div.content{
    width: 100%;
    display: flex;
    gap: 64px;
    justify-content: space-between;

    


    aside{
      display: flex;
      flex-direction: column;
      width: 25%;

      h4{
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray400};
        margin-bottom: 16px;
      }

      div.option{
        width: 100%;
        height: 40px;
        gap: 16px;
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.background1};
        cursor: pointer;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray900};
        overflow: hidden;

        &:nth-child(2){
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        &:last-child{
          border-bottom: none;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        span{
          font-size: 16px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.gray200};
        }

        div.bar{
          height: 100%;
          width: 4px;
          background-color: transparent;
        }

        &.active{
          div.bar{
            background-color: ${({ theme }) => theme.colors.primary};
          }

          span{
            color: ${({ theme }) => theme.colors.text};
          }
        }
      }
    }

    div.stacks{
      display: flex;
      align-items: center;
      gap: 24px;
      height: fit-content;
      max-width: 424px;
      flex-wrap: wrap;
      justify-content: flex-end;

      div.stack{
        height: 88px;
        min-height: 88px;
        width: 88px;
        min-width: 88px;
        border-radius: 32px;
        border: 1px solid ${({ theme }) => theme.colors.gray900};
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.background1}, ${({ theme }) => theme.colors.background2});

        img{
          width: 56px;
          height: 56px;
          object-fit: contain;
        }
      }
    }
  }
`;