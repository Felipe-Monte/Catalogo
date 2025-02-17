import styled from 'styled-components';

export const Container = styled.div`
  .cart-text{
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: transparent;
  border: 0;
`;

export const SideBarContainer = styled.div`
  position: fixed;
  top: 0px;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100vw')};

  width: 100%;
  height: 100vh;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  transition: right 0.3s ease-in-out;

  padding: 10px;

  & > button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid yellow;
  }
  > p {
    text-align: center;
  }
`;
