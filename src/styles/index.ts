import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    background: var(--background);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    color: #494D4B;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Poppins, sans-serif;
    color: var(--heading);
  } 

  :root {
    --orange: #ff6700;

    --blueLight: #1976d2;
    --blue: #1565c0;
    --blueDark: #0D47A1;
    
    --heading: #494D4B;
    --text: #494D4B;
    --textLight: #808080;

    --line: #E6E8EB;

    --background: #F7F8FA;
  }

  #unitTagGlobalUnit {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  #unitTagGlobal {
    display: flex;
    width: 100%;
    height: 100%;
  }

  button, a {
    cursor: pointer;
  }

  button[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;