import styled from "styled-components";

export const Container = styled.button`
  width: 42px;
  height: 42px;

  position: absolute;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border: 1px solid red;

  > svg {
    width: 100%;
    height: 100%;
  }
`
