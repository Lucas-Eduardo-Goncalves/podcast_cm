import styled from 'styled-components';


export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 50px auto;
  background: blue;

  h1 {
    text-align: center;
  }
  
  .progressbar-container {
    position: relative;
    width: 100%;
    height: 50px;
    border: 1px solid #FFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .progressbar-complete {
      position: absolute;
      left: 0;
      top: 0px;
      height: 100%;
      background-color: #ff002b;
      border-radius: 10px;
      animation: g 2500ms infinite ease-in-out;
      z-index: 2;
      
      .progressbar-liquid {
        z-index: 1;
        width: 70px;
        height: 50px;
        animation: g 2500ms infinite ease-in-out, r 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
        position: absolute;
        right: -5px;
        top: -10px;
        background-color: #ff002b;
        border-radius: 40%;
      }
    }
    .progress {
      z-index: 2;
      color: #fff;
      font-weight: bold;
    }
  }

  @keyframes g {
    0% { background-color: #00043a; }
    50% { background-color: #004e89; }
    100% { background-color: #00043a; }
  }

  @keyframes r {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  }
`;

