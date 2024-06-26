import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  width: 300px;
  height: 345px;

  padding: 15px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  transition: all 0.3s ease-out;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  cursor: pointer;

  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  &:active {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_HOVER};
  }

  .unavailable {
    position: relative;
  }

  .icon-new {
    display: none;
  }

  &.new_item {
    border: 2px solid yellow;

    .icon-new {
      display: block;

      width: 30px;
      height: 30px;

      position: absolute;

      top: 4px;
      right: 4px;

      z-index: 1;

      color: yellow;
    }
  }

  .unavailable-banner {
    position: absolute;
    top: 37%;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(255, 0, 0, 0.7);
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-35deg);
    pointer-events: none;
  }

  @media screen and (max-width: 700px) {
    border-radius: 0px;

    width: 100%;
    height: 290px;

    padding: 0;
  }
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  border-radius: 0px;
  position: relative;


  #loader {
    width: 30px;
    height: 30px;

    position: absolute;
  }

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 5px;
  }

  @media screen and (max-width: 425px) {
    max-height: 200px;
    height: 100%;

    > img {
    border-radius: 0px;
  }
  }
`;

export const CardText = styled.div`
  width: 100%;
  height: 100px;

  padding: 10px;

  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;   */

  #in_stock {
    margin-top: 2px;
    color: #22c55e;
    font-size: 14px;
  }

  > h2 {
    font-size: 22px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .container-category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 2px 0px 2px 0px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    > p {
      font-size: 14px;
      opacity: 0.4;
    }

    .p-category {
      font-size: 12px;
      opacity: 0.4;
    }
  }

  > span {
    display: block;
    font-size: 24px;
  }

  #share {
    display: none;
  }

  @media screen and (max-width: 700px) {
    height: 100px;

    padding: 5px;

    > h2 {
      font-size: 14px;
    }

    #in_stock {
      color: #22c55e;
      font-size: 12px;
    }

    .container-category {
      > p {
        font-size: 12px;
        opacity: 0.4;
      }

      .p-category {
        font-size: 12px;
        opacity: 0.4;
      }
    }

    > span {
      font-size: 16px;
    }
  }
`;
