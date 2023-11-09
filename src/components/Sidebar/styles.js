import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${props => props.sidebar ? "-100%" : "0"};
  animation: showSidebar .4s;
  
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from{
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`

export const Content = styled.div`
  margin-top: 60px;
`