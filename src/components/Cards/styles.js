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
      height: 275px;
      
      padding: 0;
    }
`

export const CardImg = styled.div`
  width: 100%;
  height: 200px;

  border-radius: 5px;
  
  > img {
    width: 100%;
    height: 100%;
    
    border-radius: 5px;
  }

  @media screen and (max-width: 425px) {
      max-height: 200px;
      height: 100%;
    }
`

export const CardText = styled.div`
  width: 100%;
  height: 100px;

  padding: 10px;

  /* white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;  */

  > h2 {
    font-size: 22px;
  }

  > p {
    font-size: 14px;
    opacity: 0.4;
  }

  > span {
    font-size: 24px;
  }

  @media screen and (max-width: 700px) {
      height: 100px;

      padding: 5px;

      > h2 {
        font-size: 18px;
      }

      > p {
        font-size: 12px;
        opacity: 0.4;
      }

      > span {
        font-size: 12px;
      }
    }
`

