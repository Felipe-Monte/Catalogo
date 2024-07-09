import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 50px;

  /* position: absolute;
  bottom: 0;
  left: 0; */

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 4px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  text-align: center;

  p {
    font-size: 12px;
  }
`;
