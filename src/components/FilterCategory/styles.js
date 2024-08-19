import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5px;

  position: fixed;
  top: 80px;
  right: 0;

  z-index: 2;

  background: #3E3B47;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 5px;
    list-style: none;
    overflow-x: auto;

    /* Estilos para a barra de rolagem horizontal */
    &::-webkit-scrollbar {
      height: 8px; /* Altura da barra horizontal */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #3E3B47; /* Cor do thumb */
      border-radius: 4px; /* Borda arredondada */
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Cor do thumb ao passar o mouse */
    }

    &::-webkit-scrollbar-track {
      background-color: #e0e0e0; /* Cor do trilho */
      border-radius: 4px; /* Borda arredondada */
    }

    li {
      flex: 0 0 70px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: 2px solid white;
      font-size: 12px;
      line-height: 100%;
      cursor: pointer;

      &.active {
        background-color: ${({ theme }) =>
          theme.COLORS.PURPLE_HOVER}; /* Cor de destaque */
        color: white; /* Cor do texto */
        border-color: ${({ theme }) => theme.COLORS.PURPLE_HOVER};
      }
    }
  }
`;
