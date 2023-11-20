import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow-y: auto;

  > main {
    width: 100%;
    height: 100%; 
    
    margin-top: 50px;

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

  margin-top: 50px;

  border-radius: 10px;

  border: 2px solid white;

  @media (max-width: 768px) {
    width: 100%;
    height: calc(100% - 50px);
    
    position: fixed;
    top: 0;

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

    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 350px;

    padding: 5px;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`

export const ContainerText = styled.div`
  position: relative;

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

  > svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 450px) {
    width: 100%;

    padding-top: 10px;

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

      > svg {
        position: absolute;
        bottom: 25px;
        right: 20px;

        width: 30px;
        height: 30px;
      }
  }
`
export const ContainerButton = styled.div`
  /* position: absolute;
  bottom: 0; */
  display: flex;
  justify-content: space-between;

  width: 100px;
  height: 50px;

  padding: 10px;

  border: 2px solid blue;

  @media (max-width: 450px) {
    width: 100%;
    height: 50px;

 
  }
`