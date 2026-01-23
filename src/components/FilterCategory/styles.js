import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;
  padding: 12px 8px;

  position: fixed;
  top: 80px;
  right: 0;
  left: 0;

  z-index: 1;

  background: #3e3b47;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 16px;
    padding: 8px 12px;

    list-style: none;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;

      min-width: 70px;
      flex-shrink: 0;
      cursor: pointer;

      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }

      /* Círculo do ícone */
      .icon-wrapper {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border: 2px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

        img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }
      }

      /* Texto da categoria */
      > span {
        font-size: 11px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70px;
      }

      &:hover .icon-wrapper {
        border-color: rgba(255, 255, 255, 0.4);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      &.active {
        .icon-wrapper {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          border: 3px solid white;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
          transform: scale(1.1);
        }

        > span {
          color: #10B981;
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 10px 8px;
    margin-top: 20px;

    ul {
      gap: 12px;
      padding: 6px 8px;

      li {
        min-width: 60px;

        .icon-wrapper {
          width: 56px;
          height: 56px;

          img {
            width: 28px;
            height: 28px;
          }
        }

        > span {
          font-size: 10px;
          max-width: 60px;
        }
      }
    }
  }
`;
