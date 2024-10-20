import styled from 'styled-components'

export const Container = styled.a`
  height: 32px;
  border-radius: 5px;
  padding: 0 20px;
  background-color: transparent;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 2;

  span{
    color: ${({ theme }) => theme.colors.gray300};
    font-size: 14px;
  }  

  &:hover{
    background-color: ${({ theme }) => theme.colors.gray900}50;
    span{
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;