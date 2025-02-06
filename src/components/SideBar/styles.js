import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid white;
  background: transparent;
`;

export const SideBarContainer = styled.div`
  position: fixed;
  top: 80px;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-400px')};

  width: 400px;
  height: 100vh;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  transition: right .3s ease-in-out;
`;
