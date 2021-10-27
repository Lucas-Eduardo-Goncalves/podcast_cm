import React from 'react';

import { Container } from './styles';

export const PlayingCss: React.FC = () => {
  return (
    <Container>
      <p className="wave"></p>
      <p className="wave"></p>
      <p className="wave"></p>
    </Container>
  );
}