import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px; /* Adjusted margin */
  padding-bottom: 20px;
  position: relative;
  overflow-y: auto;

  > main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  label {
    font-weight: bold;
    color: #555;
  }

  input,
  select,
  textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 12px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #218838;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.color || '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
