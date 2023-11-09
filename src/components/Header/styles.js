import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 50px;

  position: fixed;
  top: 0;
  right: 0;

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  > svg {
    position: fixed;
    right: 10px;

    width: 45px;
    height: 45px;

    cursor: pointer;
  }

  h1 {
    font-size: 28px;
  }

  @media (max-width:450px) {
    > h1 {
      font-size: 19px;
    }
  }
`