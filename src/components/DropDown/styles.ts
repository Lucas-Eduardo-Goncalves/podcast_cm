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

        &:hover {
          background-color: green;
          color: #fff;
        }
      }
    }
  }

  .menu-trigger {
    margin-left: 1rem;
    background: var(--blue);
    color: #fff;
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.2s ease;

    span {
      font-weight: 700;
      vertical-align: middle;
      font-size: 14px;
      margin: 0 10px;

      width: 3rem;
      max-width: 3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    img {
      border-radius: 90px;
      max-width: 1.5rem;
    }

    &:hover {
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
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