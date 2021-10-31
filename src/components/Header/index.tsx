import React from 'react';

import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { useLocation } from 'react-router-dom';

import logo from '../../assets/logo.svg'
import { DropDown } from '../DropDown';

import { Container, AreaLimiter, Logo, TextHeader } from './styles';

export const Header: React.FC = () => {

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  const location = useLocation();

  const isNotMaxWidth = location.pathname.startsWith('/myprofile');

  return (
    <>
    {location.pathname !== '/' && (
      <Container isNotMaxWidth={isNotMaxWidth}>
      <AreaLimiter>
        <Logo>
          <img src={logo} alt="Pocketcast" />   
          <h1>Pocketcast</h1>
        </Logo>

        <TextHeader>
          O melhor para você ouvir, sempre
        </TextHeader>

        <span>{currentDate}</span>
        
        <DropDown />
      </AreaLimiter>
    </Container>
    )}
  </>
  );
}