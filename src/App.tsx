import React from 'react';
import GlobalStyle from './styles';

import { Header } from './components/Header';
import { Player } from './components/Player';
import { PlayerContextProvider } from './contexts/PlayerContext';

import { Dashboard } from './pages/Dashboard';

import { FuegoProvider } from '@nandorojo/swr-firestore'
import Fuego from './services/swr-firebase';
import { firebaseConfig } from './services/firebase';

export const App: React.FC = () => {

  const fuego = new Fuego(firebaseConfig);

  return (
    <div id="unitTagGlobal">
      <FuegoProvider fuego={fuego}>
        <PlayerContextProvider>
          <GlobalStyle />

          <div id="unitTagGlobalUnit">
            <Header />

            <Dashboard />
            <Player/>
          </div>

        </PlayerContextProvider>
      </FuegoProvider>
    </div>
  );
}