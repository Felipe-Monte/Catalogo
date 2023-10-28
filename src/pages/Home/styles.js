import styled from "styled-components";

export const Container = styled.div`
  width: 100%;  
  height: 100%;
  
  padding-bottom: 40px;
  position: relative;

  > main {
    width: 100%;
    max-width: 1500px;
    margin: 50px auto;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    padding: 22px;

    @media screen and (max-width: 700px) {
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

