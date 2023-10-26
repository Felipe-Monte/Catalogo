import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  width: 300px;
  height: fit-content;

  padding: 15px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  @media screen and (max-width: 700px) {
      width: 100%;
      height: 250px;
      
      padding: 0;
      pointer-events: none;
    }
`

export const CardImg = styled.div`
  width: 100%;
  height: 200px;

  border-radius: 5px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  > img {
    width: 100%;
    height: 100%;

    border-radius: 5px;
  }

  @media screen and (max-width: 425px) {
      height: 100%;
    }
`

export const CardText = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 

  > h2 {
    font-size: 22px;
  }

  > p {
    font-size: 12px;
    opacity: 0.4;
  }

  @media screen and (max-width: 700px) {
      height: 100px;

      padding: 5px;

      > h2 {
        font-size: 18px;
      }
    }
`

