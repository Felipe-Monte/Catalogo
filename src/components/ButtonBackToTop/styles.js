import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;

  font-size: 18px;

  border: none;
  border-radius: 5px;
  
  background-color: #333;
  color: white;

  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;

  > button {
    border: none;
    border-radius: 5px;
    padding: 6px 16px;
    color: white;
    background-color: #333;
  }
  
  > button:hover {
    background-color: #555;
    cursor: pointer;
  }
`;
