import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 50px;

  position: fixed;
  top: 0;
  right: 0;

  z-index: 2;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  .container-title {
    > h1 {
      font-size: 28px;
      cursor: pointer;
    }
  }

  .container-icon-filter {
    padding: 20px;

    > svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  @media (max-width: 450px) {
    .container-title {
      text-align: center;

      > h1 {
        font-size: 15px;
      }
    }
  }
`;
