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

    border: 2px solid ${({ theme }) => theme.COLORS.PURPLE};
    border-radius: 10px;

    > button {
      margin: 10px 0 10px 0;
      align-self: flex-end;
      padding: 5px;
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