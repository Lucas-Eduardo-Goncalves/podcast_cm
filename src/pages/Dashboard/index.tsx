import React from 'react';
import { Link } from 'react-router-dom';

import { usePlayer } from '../../contexts/PlayerContext';
import { PlayingCss } from '../../components/PlayingCss';

import { Container, LatestEpisodes, AllEpisodes } from './styles';

import * as Icons from '../../icons';
import { useCollection } from '@nandorojo/swr-firestore';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

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

  const { data: episodesArray } = useCollection<Episode>('Podcasts', {
    listen: true, orderBy: ['published_at', 'desc']
  }); 

  const latestEpisodes = episodesArray?.slice(0, 2);
  const allEpisodes = episodesArray?.slice(2, episodesArray?.length);

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
                  <Link to={`podcast/${episode.id}`}>{episode.title}</Link>
                  
                  <p>{episode.members}</p>
                  <span>{episode.published_at}</span>
                  <span>{convertDurationToTimeString(episode.file.duration)}</span>
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

      <AllEpisodes>
        <h2>Todos episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th className="disabledWidth">Integrante(s)</th>
              
              <th className="disabledWidth2">Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes?.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <td style={{ width: 72 }}>
                    <img
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                    />
                  </td>
                  <td>
                    <Link to={`podcast/${episode.id}`}>{episode.title}</Link>
                  </td>
                  <td className="disabledWidth">{episode.members}</td>
                  <td className="disabledWidth2">{convertDurationToTimeString(episode.file.duration)}</td>
                  <td>
                    <button type="button" onClick={() => episodesArray &&  playList(episodesArray, index + 2)}>
                      {isPlaying ? (
                        <>
                        {currentEpisodeIndex === index + 2 ? (
                          <PlayingCss />
                        ) : (
                          <Icons.Play />
                        )}
                        </>
                      ) : (
                        <Icons.Play />
                      )}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </AllEpisodes>
    </Container>
  );
}