import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: stretch;
  justify-content: space-between;
`;

export const Hero = styled.section`
  flex: 1;
  background: linear-gradient(to bottom right, var(--blueLight), var(--blueDark));
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
    }

    h1 {
      font-size: 2rem;
      margin-left: 2rem;
      color: #fff;

      span {
        margin-left: 2rem;
      }
    }
  }

  section {
    h2 {
      font-size: 2.5rem;
      color: #fff;
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: #fff;
    }
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
      height: 2px;
      width: 100%;

      border-radius: 2px;
      background: #fff;
    }

    p {
      font-size: 1.15rem;
      font-weight: 600;
      color: #fff;
    }
  }

  @media(max-width: 1030px) {
    header h1 span {
      display: none;
    }
  }

  @media(max-width: 900px) {
    display: none;
  }
`;

export const Main = styled.main`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6rem 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    width: 100%;

    min-width: 450px;
    max-width: 450px;

    > div {
      width: 100%;
      margin-bottom: 1rem;

      h2 {
        font-size: 2rem;
      }
    }

    > p {
      margin-top: 2rem;
      color: var(--textLight);
    }

    section {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;

      width: 100%;
      gap: 1.5rem;

      button {
        height: 3.5rem;
        border: none;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        padding: 1.25rem;
        color: #fff;
        transition: all 0.2s;
        font-size: 1.25rem;

        svg {
          font-size: 1.65rem;
          margin-right: 1.5rem;
        }

        &.google {
          background: linear-gradient(to right, #c00021,#ff002b );

          &:hover {
            filter: brightness(0.85);
          }
        }

        &.facebook {
          background: linear-gradient(to right, var(--blueDark),var(--blue));

          &:hover {
            filter: brightness(0.85);
          }
        }
      }
    }

    > button {
      height: 3.5rem;
      margin-top: 2rem;
      width: 100%;
      border: none;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      padding: 1.25rem;
      color: #fff;
      transition: all 0.2s;
      font-size: 1.25rem;

      p {
        flex: 1;
      }

      svg {
        font-size: 1.65rem;
      }

      background: linear-gradient(to right, #002962, #407ba7);

      &:hover {
        filter: brightness(0.85);
        padding: 1rem;
      }
    }
  }
`;