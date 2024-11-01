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
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 64px;

  div.infos{
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 50%;
  }

  form{
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 24px;
  }
`;

export const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label{
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray300};
  }

  div.field{
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.background1};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray800};

    svg{
      width: 24px;
      min-width: 24px;
      height: 24px;

      path{
        stroke: ${({ theme }) => theme.colors.gray400};
        
      }

    }

    input{
      height: 100%;
      width: 100%;
      background-color: transparent;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray100};
      border: none;
      outline: none;

      &::placeholder{
        color: ${({ theme }) => theme.colors.gray400};
      }
    }
  }

  div.textarea{
    width: 100%;
    height: 160px;
    display: flex;
    gap: 12px;
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.background1};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray800};

    svg{
      width: 24px;
      min-width: 24px;
      height: 24px;

      path{
        stroke: ${({ theme }) => theme.colors.gray400};
        
      }

    }

    textarea{
      height: 100%;
      min-height: 100%;
      max-height: 100%;
      width: calc(100% - 16px - 12px);
      min-width: calc(100% - 16px - 12px);
      max-width: calc(100% - 16px - 12px);
      background-color: transparent;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray100};
      border: none;
      outline: none;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #2E2E30;
      }

      &::placeholder{
        color: ${({ theme }) => theme.colors.gray400};
      }
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryVariant});
  cursor: pointer;
  border: none;
  outline: none;

  span{
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 600;
  }


`;