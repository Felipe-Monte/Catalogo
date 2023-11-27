import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  
  width: 100%;
  height: calc(100vh -50px) ;

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
export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 50%;

  padding-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0; 
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 100%;

    justify-content: space-between; 

    padding-right: 0;
  }
`

export const Section = styled.section`
  position: relative;

  width: 900px;
  height: 400px;

  display: flex;

  margin-top: 50px;

  border-radius: 10px;

  @media (max-width: 768px) {
    overflow-y: auto;

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

  @media (max-width: 768px) {
    width: 100%;
    height: 600px;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 500px;

    padding: 0;
  
    > img {
      width: 100%;
      height: 100%;
    }
  }
`

export const ContainerText = styled.div`
  position: relative;

  width: 100%;
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
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  height: fit-content;

  padding: 10px;

  @media (max-width: 450px) {
    width: 100%;
  }

  #btn_back {
    display: flex;
    align-items: center;
    gap: 2px;

    padding: 10px;

    border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
  }

  #btn_delete {
    padding: 10px;

    border: 1px solid ${({ theme }) => theme.COLORS.RED};

    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
  }
`