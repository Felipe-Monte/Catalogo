import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  padding-bottom: 20px;
  position: relative;
  overflow-y: auto;

  > main {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Matches Card background */
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  h2 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding-bottom: 10px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 0.9rem;
  }

  input,
  select,
  textarea {
    padding: 12px;

    /* Dark inputs */
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 6px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.COLORS.PURPLE};
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  button[type='submit'] {
    margin-top: 10px;
    padding: 14px;
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  /* Use prop color or default to Purple */
  background-color: ${(props) => props.color || props.theme.COLORS.PURPLE};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  .product-item {
    display: flex;
    align-items: center;
    padding: 12px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 8px;
    gap: 15px;
    transition: transform 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    .img-wrapper {
      width: 60px;
      height: 60px;
      border-radius: 6px;
      overflow: hidden;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .info {
      flex: 1;

      strong {
        display: block;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.1rem;
        margin-bottom: 4px;
      }

      span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 0.9rem;
      }
    }

    .actions {
      display: flex;
      gap: 8px;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.COLORS.PURPLE};
  }
`;
