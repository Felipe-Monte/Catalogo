import styled from "styled-components";

export const Container = styled.div`
  width: auto;

  overflow: hidden;
  
  > form {
    display: flex;
    flex-direction: column;

    max-width: 400px;
    height: auto;

    padding: 25px;

    margin: 50px auto 0px auto;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
    .container_button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      > a {
        display: flex;
        align-items: center;
        gap: 2px;
        
        padding: 8px;

        border: 1px solid ${({theme}) => theme.COLORS.PURPLE};
      }
      
      > button {
        padding: 5px;
      }
    }
    
    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }

  .container_input {
    > label {
      display: block;
      margin-bottom: 5px;

      font-size: 18px;
    }

    > input {
      width: 100%;
      margin-bottom: 20px;

      padding: 5px;

      background-color: ${({ theme }) => theme.COLORS.WHITE};;
      
      border: none;
      border-radius: 5px;
    }

    > input#image {
      height: 200px;
    }

  }

`