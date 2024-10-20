import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: auto;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.background2};
  border: 1px solid ${({ theme }) => theme.colors.gray900};
  gap: 8px;
  transition: all .4s;
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: default;
  z-index: 2;

  img{
    height: 12px;
    width: auto;
  }

  h4{
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    margin: 0;
  }

  &:hover{
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
