import { lighten } from 'polished';
import styled from 'styled-components';


export const Container = styled.div`
  max-width: calc(100vw - 20rem);
  height: calc(100vh - 6rem);
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  overflow: auto;

  @media(max-width: 900px) {
    max-width: unset;
  }
`;

export const Center = styled.main`
  max-width: 45rem;

  .thumbnailContainerImg {
    border-radius: 1rem;
    width: 100%;
    height: 8rem;
    background: linear-gradient(to right, var(--blueLight), var(--orange));
    margin: 1rem;
  }

  .thumbnailContainer {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s;

      width: 100%;
      width: 3rem;
      height: 2.25rem;

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

    header {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--line);

        h1 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
        }

        span {
            display: inline-block;
            font-size: 0.875rem;

            & + span {
                margin-left: 1rem;
                padding-left: 1rem;
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
`;
export const Description = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: var(--text);

  padding: 1rem;

  p {
      margin: 1.5rem 0;
  } 
`;