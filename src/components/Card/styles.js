import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 200px;
  height: fit-content;

  padding: 15px;

  border: 2px solid red;
  border-radius: 10px;

  @media screen and (max-width: 450px) {
      width: 100%;
      
      padding: 0;
    }
`

export const CardImg = styled.div`
  width: 100%;
  height: 120px;

  border: 1px solid blue;

  > img {
    width: 100%;
    height: 100%;

    background-size: cover;
  }
`

export const CardText = styled.div`

`

