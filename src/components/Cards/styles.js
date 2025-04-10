import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  width: 270px;
  height: 340px;

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

  .unavailable {
    position: relative;
  }

  .icon-new {
    display: none;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  &.new_item {
    .icon-new {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Saira', sans-serif;
      font-weight: bold;
      width: fit-content;
      height: 30px;
      padding: 8px;
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 1;
      color: white;
      background-color: #22c55e;
      border-radius: 8px;
      animation: pulse 1.5s infinite;
    }

    @media (max-width: 768px) {
      .icon-new {
        font-size: 12px;
      }
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
    height: 200px;

    object-fit: cover;
    border-radius: 5px;
  }

  img:active {
    border: 5px solid yellow;
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
  margin-top: 5px;
  height: fit-content;

  padding: 5px;

  #in_stock {
    margin-top: 0px;
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

    gap: 10px;

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

  #share {
    display: none;
  }

  .container-price {
    margin-top: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      width: fit-content;

      padding: 0px 10px;

      font-size: 20px;

      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.PURPLE};
    }

    .btnAddCart {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 50px;
      padding: 5px;
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 0px;
    height: 100px;
    > h2 {
      font-size: 16px;
    }

    #in_stock {
      color: #22c55e;
      font-size: 12px;
    }

    .container-category {
      margin-bottom: 5px;
      > p {
        font-size: 10px;
        opacity: 0.5;
      }

      .p-category {
        font-size: 12px;
        opacity: 0.5;
      }
    }

    .container-price {
      margin-top: 0;
      > span {
        font-size: 14px;
      }
    }
  }
`;
