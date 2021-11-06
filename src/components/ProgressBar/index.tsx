import React from 'react';

import { Container } from './styles';

interface Props {
  progress: number;
}

export const ProgressBar: React.FC<Props> = ({ progress }) => {

  // const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
  // const firstDayOfNextYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

  // function getProgress() {
  //   const now = new Date().getTime()
  //   return Math.round((now - firstDayOfYear) / (firstDayOfNextYear - firstDayOfYear) * 100);
  // }

  // const progress = getProgress()

  return (
    <Container>
      <div className="progressbar-container">
        <div className="progressbar-complete" style={{width: `${progress}%`}}>
          <div className="progressbar-liquid"></div>
        </div>
        <span className="progress">{progress.toFixed(0)}%</span>
      </div>
    </Container>
  );
};