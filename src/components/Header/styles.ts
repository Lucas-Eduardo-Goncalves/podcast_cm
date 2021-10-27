import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: calc(100vw - 20rem);
  height: 6rem;

  display: flex;
  justify-content: center;

  padding: 2rem 4rem;

  border-bottom: 1px solid var(--line);

  @media(max-width: 900px) {
    max-width: unset;
  }

  @media(max-width: 600px) {
    padding: 2rem;
  }
`;

export const AreaLimiter = styled.main`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 1240px;

  > span {
    margin-left: auto;
    color: var(--textLight);
  }

  @media(max-width: 500px) {
    span {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
  
  height: 100%;
  width: min-content;

  img {
    max-width: 3rem;
    max-height: 3rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  @media(max-width: 600px) {
    img {
      max-width: 2rem;
      max-height: 2rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const TextHeader = styled.p`
  color: var(--textLight);

  padding-left: 2rem;
  margin-left: 2rem;
  
  border-left: 1px solid var(--line);

  @media(max-width: 1100px) {
    display: none;
  }
`;