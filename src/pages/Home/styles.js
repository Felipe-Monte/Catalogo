import styled from "styled-components";

export const Container = styled.div`
  width: 100%;  
  height: 100%;

  > main {
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    padding: 22px;

    border: 1px solid yellow;

    @media screen and (max-width: 480px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
      justify-items: center;
      gap: 5px;

      padding: 5px;
    }
  }
`

