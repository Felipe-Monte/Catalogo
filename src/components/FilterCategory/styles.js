import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  padding: 5px;

  ul {
    display: flex;
    flex-direction: row;

    align-items: center;
    gap: 10px;

    padding: 5px;

    list-style: none;

    overflow-x: auto;

   

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
        background-color: ${({ theme }) => theme.COLORS.PURPLE_HOVER}; /* Cor de destaque */
        color: white; /* Cor do texto */
        border-color: ${({ theme }) => theme.COLORS.PURPLE_HOVER};
      }
    }
  }
`;
