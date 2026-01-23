import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  margin: 16px 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    height: 160px;
    margin: 12px 4px;
  }
`;

export const Slides = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  transform: translateX(${({ current }) => `-${current * 100}%`});
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 1;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 20px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
      transform: scale(1.2);
    }
  }

  span.active {
    width: 24px;
    height: 8px;
    border-radius: 4px;
    background: white;
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    bottom: 12px;
    gap: 8px;
    padding: 6px 10px;

    span {
      width: 6px;
      height: 6px;
    }

    span.active {
      width: 20px;
      height: 6px;
    }
  }
`;

export const Tag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);

  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    padding: 6px 12px;
    font-size: 0.75rem;
  }
`;
