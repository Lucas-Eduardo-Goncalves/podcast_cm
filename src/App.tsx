import React from 'react';
import GlobalStyle from './styles';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { Player } from './components/Player';
import { PlayerContextProvider } from './contexts/PlayerContext';

import { FuegoProvider } from '@nandorojo/swr-firestore'
import Fuego from './services/swr-firebase';
import { firebaseConfig } from './services/firebase';

import { AuthContextProvider } from './hooks/useAuth';

import { Routes } from './routes';

export const App: React.FC = () => {

  const fuego = new Fuego(firebaseConfig);

  return (
    <div id="unitTagGlobal">
      <FuegoProvider fuego={fuego}>
        <BrowserRouter>
          <PlayerContextProvider>
            <AuthContextProvider>
            <GlobalStyle />
            <div id="unitTagGlobalUnit">
              <Header />       

              <Routes />
              <Player />         
            </div>

          </AuthContextProvider>
        </PlayerContextProvider>
        </BrowserRouter>
      </FuegoProvider>
    </div>
  );
}