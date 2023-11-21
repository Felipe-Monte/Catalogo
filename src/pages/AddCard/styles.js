import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100vh;
  
  overflow: hidden;

  > form {
    display: flex;
    flex-direction: column;
    
    max-width: 400px;
    height: calc(100% - 50px);

    padding: 25px;

    margin: 50px auto;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    .wrapper_input {
      height: fit-content;

      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  
    .container_button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
      
      > a {
        display: flex;
        align-items: center;
        gap: 2px;
        
        padding: 10px;

        border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
      }
      
      > button {
        padding: 10px;
      }
    }
    
    @media screen and (max-width: 700px) {
      height: calc(100% - 50px);
      width: 100%;

      padding: 10px;
    }
  }

  .container_input {
    position: relative;

    .label_img {
      display: block;

      width: 100%;
      height: 100%; 

      position: absolute;

      top: 0;
      left: 0;

      cursor: pointer;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    } 

    .input_img {
     height: 300px;
    }

    > label {
      display: block;
      margin-bottom: 5px;

      font-size: 18px;
    }

    > input {
      width: 100%;
      margin-bottom: 15px;

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