import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 50px;

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

  .container-title {
    > h1 {
      font-size: 28px;
      cursor: pointer;
    }
  }

  @media (max-width: 450px) {
    height: 50px;
    padding: 0px 10px;

    .container-title {
      text-align: center;

      > h1 {
        font-size: 19px;
      }
    }
  }
`;
