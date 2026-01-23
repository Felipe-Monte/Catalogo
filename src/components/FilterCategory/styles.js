import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;
  padding: 8px;

  position: fixed;
  top: 80px;
  right: 0;

  z-index: 1;

  background: #3e3b47;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 8px;
    padding: 5px;

    list-style: none;
    overflow-x: auto;
    scroll-behavior: smooth; /* 🔹 Adiciona suavidade ao scroll */
    scrollbar-width: none; /* 🔹 Oculta scrollbar no Firefox */

    /* Oculta a scrollbar no Chrome, Edge e Safari */
    &::-webkit-scrollbar {
      display: none;
    }

    li {
      padding: 15px 10px;

      min-width: 100px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      flex: 1;
      cursor: pointer;

      line-height: 100%;
      font-size: 12px;

      border-radius: 8px;
      border: 1px solid white;

      &:hover {
        background-color: #999591;
      }

      &.active {
        background-color: ${({ theme }) =>
          theme.COLORS.PURPLE_HOVER}; /* Cor de destaque */
        color: yellow; /* Cor do texto */
        border-color: ${({ theme }) => theme.COLORS.PURPLE_HOVER};
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;
