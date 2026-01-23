import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  width: 270px;
  height: 340px;

  padding: 0;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  transition: all 0.3s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  cursor: pointer;

  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.COLORS.PURPLE};
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
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: 0.5px;
      width: fit-content;
      height: 28px;
      padding: 6px 12px;
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 2;
      color: white;
      background: linear-gradient(135deg, #10B981 0%, #059669 100%);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
      animation: pulse 2s ease-in-out infinite;
    }

    @media (max-width: 768px) {
      .icon-new {
        font-size: 12px;
      }
    }
  }

  .unavailable-banner {
    position: absolute;
    top: 40%;
    left: 0;
    width: 100%;
    height: 48px;
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(248, 113, 113, 0.9) 100%);
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-12deg);
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  }

  @media screen and (max-width: 700px) {
    border-radius: 8px;

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

  border-radius: 8px 8px 0 0;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  #loader {
    width: 30px;
    height: 30px;

    position: absolute;
  }

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover > img {
    transform: scale(1.05);
  }

  @media screen and (max-width: 425px) {
    max-height: 200px;
    height: 100%;

    > img {
      border-radius: 8px 8px 0 0;
    }
  }
`;

export const CardText = styled.div`
  width: 100%;
  height: fit-content;

  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  #in_stock {
    margin-top: 0px;
    color: #22c55e;
    font-size: 14px;
    font-weight: 600;
  }

  > h2 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .container-category {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 10px;
    margin-top: 4px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    > p {
      font-size: 14px;
      opacity: 0.5;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .p-category {
      font-size: 12px;
      opacity: 0.5;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  #share {
    display: none;
  }

  .container-price {
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      width: 100%;
      padding: 8px 12px;
      font-size: 1.125rem;
      font-weight: 600;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: #2A2A2A;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 0px;
    padding: 8px;
    gap: 4px;
    height: 100px;
    
    > h2 {
      font-size: 16px;
    }

    #in_stock {
      color: #22c55e;
      font-size: 12px;
    }

    .container-category {
      margin-bottom: 4px;
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
        padding: 6px 10px;
      }
    }
  }
`;
