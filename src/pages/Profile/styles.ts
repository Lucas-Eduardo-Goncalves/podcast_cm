import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
  overflow-y: scroll;

  @media(max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  padding: 1rem;

  width: 100%;
  height: 14rem;

  background: linear-gradient(to right, var(--blueLight), var(--blueDark));


  img {
    max-width: 5rem;
    margin-bottom: auto;
    border-radius: 50%;
  }

  section {
    display: flex;
    align-items: center; 
    gap: 0.5rem;

    h3 {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }
`;

export const AreaButtons = styled.div`
  width: 25rem;
  height: 14rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  button {
    display: block;
    position: relative;
    
    border: 0;
    height: 100%;
    
    background: transparent;
    color: var(--text);
    font-weight: 600;

    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    &:hover:before {
      left: 0%;
      right: auto;
      width: 100%;
    }

    &:before {
      display: block;
      position: absolute;
      top: 0px;
      right: 0px;
      height: 100%;
      width: 0px;
      z-index: -1;
      content: '';
      color: #fff;
      background: linear-gradient(to right, var(--blueDark), var(--blue));
      transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    }

    &:hover {
      color: #fff;
    }
  }

  @media(max-width: 600px) {
    width: 100%;
    height: calc(100% - 14rem);


    button {
      max-height: 6rem;
    }
  }
`;