import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;

  height: 100%;
  width: 100%;
  max-height: 2rem;
  max-width: 2rem;

  .wave {
    width: 2px;
    height: 1rem;
    background: #fff !important;
    animation: wave 1s linear infinite;
    border-radius: 20px;
  }

  .wave:nth-child(2) {
    animation-delay: 0.1s;
  }
  .wave:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
