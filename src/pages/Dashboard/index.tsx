import React, { useEffect, useState } from 'react';
import { usePlayer } from '../../contexts/PlayerContext';
import { api } from '../../services/api';

import { PlayingCss } from '../../components/PlayingCss';

import { Container, LatestEpisodes } from './styles';

import * as Icons from '../../icons';

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

export const Dashboard: React.FC = () => {

  const [episodesArray, setEpisodesArray] = useState<Episode[]>();

  useEffect(() => {
    api.get('episodes').then(response => setEpisodesArray(response.data))
  },[])

  const latestEpisodes = episodesArray?.slice(0, 2);

  const { playList, currentEpisodeIndex, isPlaying } = usePlayer()

  return (
    <Container>
        
      <h2>Últimos lançamentos</h2>
      
      <LatestEpisodes>
          {latestEpisodes?.map((episode, index) => {
            return (
              <div key={episode.id}>

                <img src={episode.thumbnail} alt={episode.title} />

                <div>
                  <h3>{episode.title}</h3>
                  
                  <p>{episode.members}</p>
                  <span>{episode.published_at}</span>
                  <span>{episode.file.duration}</span>
                </div>

                <button type="button" onClick={() => episodesArray && playList(episodesArray, index)}>
                  {isPlaying ? (
                    <>
                    {currentEpisodeIndex === index ? (
                      <PlayingCss />
                    ) : (
                      <Icons.Play />
                    )}
                    </>
                  ) : (
                    <Icons.Play />
                  )}
                </button>
              </div>
            )
          })}
      </LatestEpisodes>
      <PlayingCss />
    </Container>
  );
}