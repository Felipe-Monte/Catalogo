import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow-y: hidden;

  .container-section{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;

    overflow-y: hidden;
  }

  > main {
    width: 100%;
    height: 100%; 

    margin-top: 100px;

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

  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 550px;

    margin-top: 70px;
    
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

export const ButtonBackContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 10px;

    position: absolute;
    bottom: 20px;
    left: 20px;

    cursor: pointer;

    border: 1px solid ${({theme}) => theme.COLORS.PURPLE};

    > svg {
      width: 20px;
      height: 20px;
    }

    > a {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 2px;
    }
`