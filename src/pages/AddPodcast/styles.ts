import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ImgProps {
  ImgSelected: boolean;
}

interface ButtonProps {
  ButtonSelected: boolean;
}

export const Container = styled.form`
  width: 100%;
  height: calc(100vh - 6rem);

  display: flex;
  flex-direction: column;
  padding: 1rem;

  .areaImages {
    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      flex-wrap: wrap;
      gap: 0.5rem;

      padding: 1rem;

      img {
        max-height: 10rem;
      }
    }
  }

  section {
    margin: 1rem;

    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    input {
      display: block;
      width: 100%;
      height: 3rem;
      font-size: 0.8rem;

      padding: 1rem;

      color: var(--text);

      border: none;
      border-radius: 0.5rem;

      background: ${shade(0.1, '#F7F8FA')};
    }

    textarea {
      display: block;
      width: 100%;
      height: 6rem;
      resize: none;
      font-size: 0.8rem;
      font-family: Roboto, sans-serif;

      padding: 1rem;

      color: var(--text);

      border: none;
      border-radius: 0.5rem;

      background: ${shade(0.1, '#F7F8FA')};
    }

    &.category {

      div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
      }
    }

    &:last-child {
      padding-bottom: 2rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    button {
      width: 10rem;
      height: 2rem;
      background: #ff002b;

      color: #fff;
      font-weight: 600;
      
      border: none;
      border-radius: 0.25rem;

      transition: all 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff002b')};
      }
    }
  }

`;

export const Img = styled.img<ImgProps>`

  transition: all 0.2s;

  ${props => props.ImgSelected && css`
    border: 2px solid #ff002b;
  `}

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: #002962;
  color: #fff;
  font-weight: bold;
  border: none;
  transition: all 0.2s;
  border-radius: 0.25rem;
  width: 10rem;
  height: 2.5rem;

  ${props => props.ButtonSelected && css`
    background: #ff002b;
  `}
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

export const Divider = styled.hr`
  margin: 1rem;
  color: var(--line);
`;