import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 26.5rem;
  text-align: center;

  > h1 {
    margin-bottom: 10px;
  }

  > textarea {
    margin-top: 10px;
    padding: 10px;
    width: 400px;
    height: 400px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 5px;
    border: 0;
  }

  > button {
    margin-top: 1rem;
    padding: 5px;
    width: 200px;
    border: none;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  @media (max-width: 450px) {
    > textarea {
      width: 90%;
      height: 400px;
    }
  }
`;
