import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  width: 300px;
  height: fit-content;

  padding: 15px;

  /* border: 1px solid red; */
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  }

  @media screen and (max-width: 700px) {
      width: 100%;
      
      padding: 0;
    }
`

export const CardImg = styled.div`
  width: 100%;
  height: 200px;

  border-radius: 5px;
  /* border: 1px solid blue; */

  > img {
    width: 100%;
    height: 100%;

    background-size: cover;
    border-radius: 5px;
  }

  @media screen and (max-width: 425px) {
      height: 120px;
    }
`

export const CardText = styled.div`
  padding: 10px;
`

