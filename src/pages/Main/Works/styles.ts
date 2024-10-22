import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background1};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 80px 128px;
  gap: 48px;
  flex-wrap: wrap;
`;

export const Content = styled.a`
  width: calc(33% - 48px);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray900};
  display: flex;
  flex-direction: column;
  transition: all .2s;
  position: relative;
  text-decoration: none;
  overflow: hidden;

  div.on-going{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    background-color: #0D0D0D;
    border: 1px solid ${({ theme }) => theme.colors.gray900};
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.yellow};
    width: fit-content;
    border-radius: 2px;
    position: absolute;
    left: 8px;
    top: 8px;
    z-index: 2;

  }
  
  div.img{
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  div.content{
    height: auto;
    width: 100%;
    padding: 24px;
    background-color: #0D0D0D;
    transition: all .2s;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;

    svg.arrow{
      width: 24px;
      height: 24px;
      position: absolute;
      right: 24px;
      top: 24px;
      transition: all .4s;
      transform: scale(0%);

      path{
        fill: ${({ theme }) => theme.colors.gray600};
      }
    }

    div.capacity{
      display: flex;
      align-items: center;
      gap: 4px;

      svg{
        width: 20px;
        height: 20px;
      }

      span{
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.gray300};
      }
    }

    h3{
      color: ${({ theme }) => theme.colors.text};
      font-weight: 400;
    }

    div.line{
      display: flex;
      align-items: center;
      gap: 24px;
      width: 100%;
      justify-content: space-between;

      p{
        font-size: 12px;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.gray300};
        width: 100%;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }
    }

    div.stacks{
      display: flex;
      align-items: center;
      min-width: fit-content;

      div.stack{
        width: 40px;
        min-width: 40px;
        height: 40px;
        border-radius: 16px;
        border: 1px solid ${({ theme }) => theme.colors.gray900};
        background-color: #0D0D0D;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .2s;
        
        margin-left: -12px;

        &:first-child{
          margin-left: 0px;
        }

        img{
          height: 22px;
          width: 22px;
          object-fit: contain;
        }
      }
    }
  }

  &:hover{
    div.content{
      background-color: ${({ theme }) => theme.colors.background1};

      div.stacks div.stack{
        background-color: ${({ theme }) => theme.colors.background1};
      }

      svg.arrow{
        transform: scale(100%);
      }
    }
  }
`;