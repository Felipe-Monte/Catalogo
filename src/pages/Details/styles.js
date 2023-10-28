import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  border: 2px solid red;

  .container-section{
    width: 100%;
    height: 100%;
  }

  > main {
    width: 100%;
    height: 100%; 

    display: flex;
    justify-content: center;
  }

  @media (max-width: 450px) {
    > main {
      height: 100%; 
    }
  }
`
export const Section = styled.section`
  width: 800px;
  height: 400px;

  display: flex;

  border: 1px solid white;
  border-radius: 10px;

  @media (max-width: 450px) {
    width: 100%;
    height: 500px;

    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center; 

    border-radius: 0;
  }
`
export const ContainerImg = styled.div`
  width: 50%;
  height: 100%;

  padding: 20px;


  > img {
    width: 100%;
    height: 100%;

    border-radius: 10px;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 300px;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`

export const ContainerText = styled.div`
  width: 50%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;

  > h2 {
    font-size: 32px;
  }

  > p {
    font-size: 16px;
    margin-top: -5px;
    opacity: 0.4;
  }

  > span {
    font-size: 36px;
  }

  @media (max-width: 450px) {
    width: 100%;

    padding-top: 0;
  
      > h2 {
      font-size: 28px;
    }

    > p {
      font-size: 14px;
      margin-top: -5px;
      opacity: 0.4;
    }

    > span {
      font-size: 30px;
    }
  }
`