import styled from 'styled-components';
import { lighten } from 'polished';

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
`;

export const LatestEpisodes = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    width: 30rem;

    padding: 1rem;

    border: 1px solid var(--line);
    border-radius: 1rem;

    img {
      max-height: 5rem;
      display: none;
    }

    div {
      width: 100%;
      margin-left: 1rem;

      h3 {
        font-size: 1rem;
        line-height: 1.2rem;
        margin-bottom: 01rem;
      }
          
      p {
        font-size: 0.8rem;
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
          
      span {
        display: inline-block;
        margin-top: 0.5rem;
        font-size: 0.8rem;

        &:last-child {
          margin-left: 0.5rem;
          padding-left: 0.5rem;
          position: relative;

          &::before {
            content: "";
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background: #DDD;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s;

      width: 2.5rem;
      height: 2rem;

      border: none;
      border-radius: 0.5rem;

      background: var(--orange);
      color: #fff;

      font-size: 1.30rem;

      &:hover {
        background: ${lighten(0.2, '#ff6700')};
        opacity: 0.8;
      }
    }
  } 

  @media(max-width: 1270px) {
    flex-wrap: wrap;
    justify-content: center;

    div {
      width: 100%;
      max-width: 50rem;

      img {
        display: block;
      }
    }
  }

  @media (max-width: 960px) {
    div {
      img {
        display: none;
      }
    }
  }
`;