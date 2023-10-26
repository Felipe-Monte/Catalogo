import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.PURPLE};

  p {
    font-size: 12px;
  }
`