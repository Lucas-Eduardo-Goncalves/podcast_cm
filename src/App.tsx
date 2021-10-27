import React from 'react';
import GlobalStyle from './styles';

import { Header } from './components/Header';
import { Player } from './components/Player';
import { PlayerContextProvider } from './contexts/PlayerContext';

import { Dashboard } from './pages/Dashboard';

export const App: React.FC = () => {
  return (
    <div id="unitTagGlobal">
      <PlayerContextProvider>
        <GlobalStyle />

        <div id="unitTagGlobalUnit">
          <Header />
          
          <Dashboard />
        <Player/>
        </div>

      </PlayerContextProvider>
    </div>
  );
}