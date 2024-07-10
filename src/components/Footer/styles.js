import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 50px;

  text-align: center;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: 4px;

  background-color: ${({ theme }) => theme.COLORS.PURPLE};

  p {
    font-size: 12px;
  }
`;
