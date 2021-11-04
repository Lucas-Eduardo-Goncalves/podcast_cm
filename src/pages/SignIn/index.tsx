import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logoDark.svg'

import { useAuth } from '../../hooks/useAuth';

import { Google, Facebook, ChevronRight } from '../../icons';
import { Container, Hero, Main } from './styles';

export const SignIn: React.FC = () => {

  const { signInWithGoogle, signInWithFacebook, user } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (user !== undefined) {
      history.push('/home')
    } 
  },[user, history])
  
  return (
    <Container>
      <Hero>
        <header>
          <img src={logo} alt="PocketCast" />

          {/* <h1>PocketCast <span>G❤️M</span></h1> */}
        </header>

        <section>
          <h2>Bem vindo de volta,</h2>
          <p>Faça login para ter acesso as nossas paginas...</p>
        </section>

        <footer>
          <div />

          <p>https://pocketcastgs2m.netlify.app</p>
        </footer>
      </Hero>
      <Main>
        <div>
          <div>
            <h2>Fazer Login</h2>
          </div>

          <p>Conecte com suas redes sociais</p>

          <section>
            <button className="google" onClick={signInWithGoogle}>
              <Google />
              Google
            </button>

            <button className="facebook" onClick={signInWithFacebook}>
              <Facebook />
              Facebook
            </button>
          </section>

          <p>ou prossiga sem realizar o login</p>

          <button onClick={() => history.push('/home')}>
            <p>Continue</p>
            <ChevronRight />
          </button>
        </div>
      </Main>
    </Container>
  );
};