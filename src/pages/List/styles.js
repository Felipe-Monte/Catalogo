import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  text-align: center;

  > h1 {
    margin-bottom: 10px;
  }

  > textarea {
    padding: 10px;
    width: 400px;
    height: 400px;
  }

  > button {
    margin-top: 1rem;
    width: 200px;
  }
`;
