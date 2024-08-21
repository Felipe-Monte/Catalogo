import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 12px;
  right: 12px;

  font-size: 18px;

  border: none;
  border-radius: 5px;
  
  background-color: #333;
  color: white;

  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 5px;
    padding: 8px 14px;
    color: white;
    background-color: #333;
  }
  
  > button:hover {
    background-color: #555;
    cursor: pointer;
  }
`;
