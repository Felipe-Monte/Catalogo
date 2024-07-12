import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: calc(100vh - 80px); */
  height: 100vh;

  margin-top: 80px;
  padding-bottom: 0px;

  position: relative;
  scroll-behavior: smooth;
 
  > main {
    width: 100%;
    max-width: 1500px;
    height: calc(100vh - 85px);

    padding-bottom: 0px;

    margin: 0 auto;
    overflow-y: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    
    scroll-behavior: smooth;
  }

  /* BUG SCROLL IN MOBILE */
  @media (max-width: 768px) {
    border: 2px solid red;
    padding-bottom: 85px;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  padding: 15px;
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
