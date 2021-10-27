import React from 'react';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import logo from '../../assets/logo.svg'

import { Container, AreaLimiter, Logo, TextHeader } from './styles';

export const Header: React.FC = () => {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <Container>
      <AreaLimiter>
        <Logo>
          <img src={logo} alt="Pocketcast" />   
          <h1>Pocketcast</h1>
        </Logo>

        <TextHeader>
          O melhor para você ouvir, sempre
        </TextHeader>

        <span>{currentDate}</span>
      </AreaLimiter>
    </Container>
  );
}