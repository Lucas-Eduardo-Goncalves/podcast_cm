import styled from 'styled-components';
import { lighten } from 'polished';

export const ContainerLittle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 5rem;
  gap: 0.5rem;

  background: #002962;
  color: #fff;

  .button {
    background: transparent;
    color: #ccc;
    border: none;
    font-size: 1.5rem;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    margin-right: 1rem;

    border-radius: 0.5rem;

    &:hover {
      background: ${lighten(0.2 ,'#002962')};
      /* linear-gradient(to bottom right, #004e89, #00043a) */
    }
  }

  @media(min-width: 900px) {
    display: none;
  }

  @media(max-width: 425px) {
    .disabledImgGroup {
      display: none;
    }

    .button {
      margin-right: auto;
    }
  }
`

export const Container = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  
  width: 20rem;
  min-width: 20rem;
  height: 100%;

  background: #002962;
  color: #fff;

  .button {
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    margin: 1rem;
    color: #ccc;
    border: none;
    font-size: 1.5rem;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    

    border-radius: 0.5rem;

    &:hover {
      background: ${lighten(0.2 ,'#002962')};
    }
  }

  .boxInActive {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(to bottom right, #004e89, transparent);

    margin-top: 3rem;
    padding: 1rem;

    height: 16rem;
    width: 16rem;
    
    border: 1px dashed var(--line);
    border-radius: 1rem;
  }

  @media(min-width: 900px) {
    &.containerTotal {
      display: none;
    }
  }

  @media(max-width: 900px) {
    display: none;
    &.containerTotal {
      display: flex;
      width: 100vw;
    }
  }
`;

export const CurrentEpisode = styled.div`
  text-align: center;

  margin-top: 3rem;

  img {
    border-radius: 1.5rem;
    height: 16rem;
    width: 16rem;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font: 600 1rem Roboto, sans-serif;
    line-height: 1.5rem;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    margin-bottom: auto;
    opacity: 0.6;
    font: 400 0.8rem Roboto, sans-serif;
    line-height: 1rem;
  }

  @media(max-width: 425px) {
    img {
      border-radius: 1rem;
      height: 12rem;
      width: 12rem;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  width: 100%;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }

  .slider {
    flex: 1;

    .emptySlider {
      width: 100%;
      height: 4px;
      background: #002962;
      border-radius: 2px;
    }
  }
`;

export const ImgGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  p {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    margin-left: 1rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  margin-top: auto;
  margin-bottom: 1rem;

  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const ButtonSecondary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #002962;
  transition: all 0.2s;

  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;

  font-size: 1.25rem;

  border: none;
  border-radius: 0.5rem;

  color: #fff;

  &.isActive {
    color: #ff002b;
  }

  &:hover {
    opacity: 0.8;
    background: ${lighten(0.1, '#002962')};
  }
`;

export const ButtonMain = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #004e89;
  transition: all 0.2s;

  width: 3rem;
  height: 3rem;
  padding: 0.5rem;

  font-size: 1.25rem;

  border: none;
  border-radius: 0.5rem;

  color: #fff;

  &:hover {
    opacity: 0.8;
    background: ${lighten(0.1, '#004e89')};
  }
`;