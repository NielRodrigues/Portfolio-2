import styled from 'styled-components'

export const Container = styled.a`
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

  span{
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
  }

  svg{
    width: 16px;
    height: 16px;

    path{
      stroke: ${({ theme }) => theme.colors.text};
    }
  }

  
`;