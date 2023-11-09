import styled from "styled-components"

import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: 1px solid purple;
  border-radius: 10px;
  margin: 0 15px 20px; 

  > svg {
    margin: 0 20px;
  }

  &:active {
    background-color: black;
  }
`