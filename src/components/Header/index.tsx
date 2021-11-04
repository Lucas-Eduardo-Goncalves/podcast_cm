import React  from 'react';

import { useLocation } from 'react-router-dom';

import logo from '../../assets/logoLight.svg'
import { DropDown } from '../DropDown';

import { Container, AreaLimiter, Logo, TextHeader } from './styles';

export const Header: React.FC = () => {

  const location = useLocation();

  const isNotMaxWidth = location.pathname.startsWith('/myprofile');

  const frases =[
    'Felizes são os que ouvem a palavra de Deus e a guardam!',
    'Felizes são aqueles que não se deixam levar pelos conselhos dos maus.',
    'Lâmpada para os meus pés é a tua palavra e, luz para os meus caminhos.',
    'Filho meu, ouve o ensino de teu pai, e não deixes a instrução de sua mãe.',
    'Palavras amigas são doces como o mel, dão ânimo e novas forças.',
    'Melhor ouvir a repreensão do sábio, do que ouvir a canção do tolo.',
    'Aceita, Senhor, a espontânea oferenda dos meus lábios e ensina-me os teus juízos.',
    'Eu Te exaltarei, ó Deus, rei meu; bendirei o Teu nome pelos séculos dos séculos.'
  ]

  const frase = frases[Math.floor(Math.random() * frases.length)];

  return (
    <>
    {location.pathname !== '/' && (
      <Container isNotMaxWidth={isNotMaxWidth}>
      <AreaLimiter>
        <Logo>
          <img src={logo} alt="Pocketcast" />   
          {/* <h1>Pocketcast</h1> */}
        </Logo>

        <TextHeader>
         {frase}
        </TextHeader>
        
        <DropDown />
      </AreaLimiter>
    </Container>
    )}
  </>
  );
}