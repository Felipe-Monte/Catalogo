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
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  .container_header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-title {
    > h1 {
      font-size: 28px;
      font-family: "Saira Stencil One", sans-serif;
      font-weight: 400;
      font-style: normal;
      cursor: pointer;
    }
  }

  .container-icon-filter {
    display: none;
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

  @media (min-width: 768px){
    height: 80px;

    padding: 0px 80px;

    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .container_header {
      width: 20%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

`;

