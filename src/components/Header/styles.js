import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.PURPLE};

  h1 {
    font-size: 28px;
  }
`