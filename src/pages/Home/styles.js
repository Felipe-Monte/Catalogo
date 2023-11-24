import styled from "styled-components";

export const Container = styled.div`
  width: 100%;  
  height: 100vh;

  margin-top: 50px;
  
  padding-bottom: 40px;
  position: relative;

  scroll-behavior: smooth;

  > main {
    width: 100%;
    max-width: 1500px;
    height: 100vh;

    margin: 0px auto;
    overflow-y: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;

    padding: 0px;

    scroll-behavior: smooth;
  }

  main::-webkit-scrollbar { 
    display: none;
  }

  @media (max-width: 1300px) {
    margin: 50px auto;
  }
`

export const Section = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  padding: 15px;

  scroll-behavior: smooth;

  /* border: 2px solid white; */

  @media screen and (max-width: 700px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);  
      justify-content: center;
      align-items: center;
      justify-items: center;
      gap: 3px;
      
      padding: 5px 0px 0px 0px;

      > svg {
        position: absolute;
        top: 50px;
      }
    }
`

