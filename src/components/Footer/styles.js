import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 40px;

  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  p {
    font-size: 12px;
  }
`;
