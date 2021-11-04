import { lighten } from 'polished';
import styled, { css } from 'styled-components';

interface ImgProps {
  ImgSelected: boolean;
}

export const Container = styled.div`
  padding: 2rem;
  height: calc(100vh - 6rem);
  overflow-y: scroll;
  max-width: calc(100vw - 20rem);

  h2 {
    margin-bottom: 1.5rem;
  }

  @media(max-width: 900px) {
    width: 100%;
    max-width: unset;
  }

  @media(max-width: 425px) {

    padding: 1rem;
    h2{
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  flex-wrap: wrap;
  gap: 0.5rem;

  padding: 1rem;

  img {
    max-height: 10rem;
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

export const Episodes = styled.section`
  margin-top: 4rem;

  table {
    width: 100%;

    th, td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--line);
    }

    th {
      color: var(--line);
      text-transform: uppercase;
      font: 500 0.75rem Poppins, sans-serif;
      text-align: left;
    }

    td {
      font-size: 0.8rem;
      font-family: Roboto, sans-serif;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      }

      a {
        display: inline-block;
        color: var(--heading);
        font-size: 1.1rem;
        line-height: 1.2rem;
        margin-bottom: 1rem;

        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        transition: all 0.2s;

        width: 2rem;
        height: 2rem;

        border: none;
        border-radius: 50%;

        background: #ff002b;
        color: #fff;

        font-size: 1.30rem;

        &:hover {
          background: ${lighten(0.2, '#ff002b')};
          opacity: 0.8;
        }
      }
    }
  }


  @media (max-width: 1200px) {
    .disabledWidth {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .disabledWidth2 {
      display: none;
    }
  }
`;