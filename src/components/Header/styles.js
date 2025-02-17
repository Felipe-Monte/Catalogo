import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;

  padding: 0px 20px;

  position: fixed;
  top: 0;
  right: 0;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  > p {
    font-size: 12px;
    text-align: center;

    span {
      font-size: 14px;
      font-style: italic;
      font-weight: bold;
      color: yellow;
    }
  }

  .filter-text {
    display: none;
  }

  .container-title {
    > h1 {
      font-size: 28px;
      font-family: 'Saira Stencil One', sans-serif;
      font-weight: 400;
      font-style: normal;
      cursor: pointer;
    }
  }
  .sideBar {
    display: none;
  }

  @media (max-width: 600px) {
    height: 100px;
    padding: 0px 20px;

    .sideBar {
      display: block;
    }

    .container_header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .container-title {
      text-align: center;

      > h1 {
        font-size: 19px;
      }
    }

    .filter-mobile {
      width: fit-content;

      display: block;
      font-size: 13px;

      span {
        font-weight: bold;
        color: yellow;
      }
    }
  }

  @media (min-width: 600px) {
    height: 80px;
    padding: 0px 80px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    .container_header {
      width: 20%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .filter-desktop {
      width: fit-content;

      display: block;
      font-size: 13px;

      span {
        font-weight: bold;
        color: yellow;
      }
    }
  }
`;
