import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 6rem);
  overflow-y: scroll;
  max-width: calc(100vw - 20rem);

  @media(max-width: 900px) {
    width: 100%;
    max-width: unset;
  }
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  width: 100%;
  height: 14rem;

  background: linear-gradient(to bottom right, var(--blueLight), var(--blueDark));

  .userLeft{
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

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
  }

  .admin {
    display: flex;
    height: 100%;

    p {
      color: red;
    }
  }

  .user {
    display: flex;
    height: 100%;

    p {
      color: #fff;
    }
  }
`;