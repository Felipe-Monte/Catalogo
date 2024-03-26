import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  /* margin-bottom: 22px; */

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 5px;
  border: 0;

  > input {
    height: 100%;
    width: 100%;

    padding: 12px;
    padding-left: 7px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-left: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
