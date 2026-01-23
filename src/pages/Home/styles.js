import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  margin-top: 150px;
  padding-bottom: 0px;

  position: relative;
  scroll-behavior: smooth;

  > main {
    width: 100%;
    max-width: 1500px;
    height: calc(100vh - 85px);

    padding-bottom: 0px;

    margin: 0 auto;
    /* overflow-y: auto; */

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;

    scroll-behavior: smooth;

    /* BUG SCROLL IN MOBILE - SPACE IN BOTTOM*/
    @media (max-width: 768px) {
      padding-bottom: 50px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 132px;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 150px;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  padding: 0px 15px;
  overflow: auto;

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 3px;

    padding: 1px 0 0 0;

    .alert_not_found {
      position: relative;
      left: 50%;
      text-align: center;
    }

    > svg {
      position: absolute;
      top: 50px;
    }
  }
`;
