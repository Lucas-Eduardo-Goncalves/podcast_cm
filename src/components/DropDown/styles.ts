import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .menu {
    background: #fff;
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
    z-index: 3;
    border-radius: 0.5rem;

    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      border-radius: 0.5rem;
    }

    li { 
      padding: 15px 20px;
      margin: 0;

      transition: all 0.1s;

      &:first-child {
        border-radius: 0.5rem 0.5rem 0 0;
      }

      &:last-child {
        border-radius: 0 0 0.5rem 0.5rem;
      }

      &:hover {
        background-color: var(--blue);
        color: #fff;
      }

      &.logout {
        color: red;
        
        &:hover {
          background-color: red;
          color: #fff;
        }
      }
      
      &.login {
        color: green;
        border-radius: 0.5rem;

        &:hover {
          background-color: green;
          color: #fff;
        }
      }
    }
  }

  .menu-trigger {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    color: #fff;
    
    border: none;
    border-radius: 0.5rem;
    
    transition: all 0.2s;
    
    margin-left: 1rem;
    height: 2.5rem;
    width: 2.5rem;

    svg {
      font-size: 1.5rem;
      color: var(--textLight);
    }

    &:hover {
      background: ${shade(0.1, '#F7F8FA')};
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.3);

  z-index: 2;
`;