import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
  text-align: center;

  border: 2px solid red;

  > textarea {
    width: 500px;
    height: 700px;
  }

  > button {
    margin-top: 1rem;
    width: 200px;
  }
`;
