import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: calc(100vh - 6rem);
  overflow-y: scroll;

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;

    h3 {
      margin-bottom: 1.5rem;
    }

    div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 0.25rem;

      border-bottom: 1px solid var(--blue);

      p {
        font-weight: 600;
        span {
          margin-left: 0.25rem;
          font-weight: normal;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        background: transparent;
        color: #fff;
        
        border: none;
        border-radius: 0.5rem;
        
        margin-left: auto;
        height: 2.5rem;
        width: 2.5rem;

        svg {
          font-size: 1.5rem;
          color: var(--textLight);
        }

        &:hover {
          background: ${shade(0.1, 'red')};

          svg {
            color: #fff;
          }
        }
      }
    }
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  h3 {
    margin-bottom: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 600;

    input {
      display: block;
      margin-top: 0.5rem;
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--blue);
    }
  }

  button {
    height: 2.5rem;
    background: var(--orange);

    color: #fff;
    font-weight: 600;
    
    border: none;
    border-radius: 0.25rem;

    transition: all 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff6700')};
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: #fff;
  
  border: none;
  border-radius: 0.5rem;
  
  transition: all 0.2s;
  
  margin: 1rem;
  height: 2.5rem;
  width: 2.5rem;

  svg {
    font-size: 1.5rem;
    color: var(--textLight);
  }

  &:hover {
    background: ${shade(0.1, '#F7F8FA')};
  }
`;
