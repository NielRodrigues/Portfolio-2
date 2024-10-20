import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background1};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WhatsAppButton = styled.a`
  text-decoration: none;
  position: fixed;
  right: 32px;
  bottom: 32px;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00FFAB;
  border-radius: 16px;
  z-index: 99;

  svg{
    width: 32px;
    height: 32px;

    path{
      fill: #F3F3F3;
    }
  }
`;
