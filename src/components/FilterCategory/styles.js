import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5px;

  position: fixed;
  top: 80px;
  right: 0;

  z-index: 1;

  background: #3e3b47;

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
      height: 10px; /* Altura da barra horizontal */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #483d8b; /* Cor do thumb */
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Cor do thumb ao passar o mouse */
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      background-color: #e0e0e0; /* Cor do trilho */
      border-radius: 4px; /* Borda arredondada */
    }

    li {
      padding: 15px 10px;
      flex: 0 0 70px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-radius: 8px;
      border: 1px solid white;
      font-size: 12px;
      line-height: 100%;
      cursor: pointer;

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
