import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: 100%;
  background: linear-gradient(to top, ${({ theme }) => theme.colors.black}, ${({ theme }) => theme.colors.background3});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 128px;
  gap: 48px;
  
  h1 span{
    color: ${({ theme }) => theme.colors.primary};
  }
  
  div.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;

    div.experience{
      width: 72%;
      padding-bottom: 48px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray900};
      display: flex;
      gap: 24px;

      img{
        height: 40px;
        width: 40px;
        object-fit: contain;
        margin-top: 4px;
        border-radius: 2px;
      }

      div.text{
        display: flex;
        flex-direction: column;
        gap: 4px;

        h1{
          font-size: 24px;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.text};
          margin: 0;
        }

        h4{
          font-size: 16px;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.gray400};
        }

        h3{
          font-size: 16px;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.gray100};
          margin-top: 20px;
        }
      }

      &:last-child{
        border-bottom: none;
      }

    }
  }
`;