import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 110px;

  padding: 0px 20px;

  position: fixed;
  top: 0;
  right: 0;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  .container_header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container-title {
    > h1 {
      font-size: 28px;
      cursor: pointer;
    }
  }

  .container-icon-filter {
    padding: 0px;

    > svg {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }

  @media (max-width: 450px) {
    height: 100px;
    padding: 0px 10px;

    .container-title {
      text-align: center;

      > h1 {
        font-size: 19px;
      }
    }

    .container-icon-filter {
      padding: 0px;

      > svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
      }
    }
  }
`;
