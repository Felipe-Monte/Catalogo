import styled from "styled-components";

export const Container = styled.div`
  width: 100%;  
  height: 100vh;
  
  padding-bottom: 40px;
  position: relative;

  > main {
    width: 100%;
    max-width: 1500px;
    height: 100vh;

    margin: 50px auto;
    overflow-y: scroll;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    padding: 0px;

  }
`

export const Section = styled.section`
  width: 100%;

  @media screen and (max-width: 700px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);  
      justify-content: center;
      align-items: center;
      justify-items: center;
      gap: 5px;

      padding: 5px;
    }
`

