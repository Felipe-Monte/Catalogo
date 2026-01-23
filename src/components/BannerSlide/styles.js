import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
  position: relative;
`;

export const Slides = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  transform: translateX(${({ current }) => `-${current * 100}%`});
  transition: transform 0.6s ease-in-out;
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: 0.3s;
  }

  span.active {
    background: white;
    transform: scale(1.2);
  }
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  animation: pulse 1.5s infinite;

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

  background: #22c55e;
  color: white;
  padding: 5px 12px;
  border-radius: 10px;

  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;
