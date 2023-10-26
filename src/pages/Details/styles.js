import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > main {
    width: 100%;
    height: calc(100% - 60px) ;

    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`
export const Section = styled.section`
  width: 1000px;
  height: 500px;

  display: flex;

  border: 1px solid white;
  border-radius: 10px;
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
`

export const ContainerText = styled.div`
  width: 50%;
  height: 100%;

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
`