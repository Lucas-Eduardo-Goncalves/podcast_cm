import React from 'react';
import HTMLRenderer from 'react-html-renderer';

import { useRouteMatch, useHistory } from 'react-router-dom';

import { useDocument } from '@nandorojo/swr-firestore';

import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import { usePlayer } from '../../contexts/PlayerContext';

import { Container, Center, Description } from './styles';
import * as Icons from '../../icons';
import { PlayingCss } from '../../components/PlayingCss';

type Episode = {
  id: string,      
  title: string,
  members: string,
  published_at: Date,
  thumbnail: string,
  description: string,
  file: {
    url: string,
    type: string,
    duration: number
  }
}

interface PodcastParams {
  id: string;
}

export const UnicPodcast: React.FC = () => {

  const { params } = useRouteMatch<PodcastParams>();
  const { data: unicEpidode } = useDocument<Episode>(`Podcasts/${params.id}`, {listen: true})

  const { play, isPlaying } = usePlayer();
  const history = useHistory();

  return (
    <Container>    
      <Center>    
        <div className='thumbnailContainer'>
          <button type="button" onClick={() => history.push('/home')}>
            <Icons.ChevronLeft />
          </button>
            
          <section className="thumbnailContainerImg"/>

          {unicEpidode && (
            <button type="button" onClick={() => play(unicEpidode)}>
              {isPlaying ? (
                <PlayingCss />
              ) : (
                <Icons.Play />
              )}
            </button>
          )}
        </div>

        <header>
          <h1>{unicEpidode?.title}</h1>
          <span>{unicEpidode?.members}</span>
          <span>{unicEpidode?.published_at}</span>
          <span>{unicEpidode?.file.duration && convertDurationToTimeString(unicEpidode.file.duration)}</span>
        </header>

        <Description>
          <HTMLRenderer
            html={unicEpidode?.description}
          />
        </Description>
      </Center> 
    </Container>
  );
};