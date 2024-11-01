import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  
  h1{
    margin: 0;
  }
  
  div.line{
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.gray800}10, ${({ theme }) => theme.colors.gray600}, ${({ theme }) => theme.colors.gray800}10);
  }
`;