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
  }
`