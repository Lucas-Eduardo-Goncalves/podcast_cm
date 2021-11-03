import { useCollection } from '@nandorojo/swr-firestore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayingCss } from '../../components/PlayingCss';
import { usePlayer } from '../../contexts/PlayerContext';
import { Play } from '../../icons';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import { Container, Header, Img, Episodes } from './styles';

type Episode = {
  id: string,      
  title: string,
  members: string,
  published_at: Date,
  thumbnail: string,
  category: string,
  description: string,
  file: {
    url: string,
    type: string,
    duration: number
  }
}


export const Playlists: React.FC = () => {

  const [imgSelected, setImgSelected] = useState('4');

  const { data: episodesArray } = useCollection<Episode>('Podcasts', {
    listen: true, 
    orderBy: ['published_at', 'desc'],
    where: ['category', '==', imgSelected],
  }); 

  const { playList, currentEpisodeIndex, isPlaying } = usePlayer();

  return (
    <Container>
      <h2>Escolha sua Playlist</h2>

      <Header>
        <Img 
          ImgSelected={imgSelected === "4"}
          onClick={() => setImgSelected('4')} 
          src="https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2F2206c6a6-d75b-4c15-b625-391bc2b46aec.jfif?alt=media&token=0c363a93-c12e-418a-903b-36deb6ae0270" 
          alt="" 
        />

        <Img 
          ImgSelected={imgSelected === "1"}
          onClick={() => setImgSelected('1')}
          src="https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.47.jpeg?alt=media&token=04fa864b-9d4f-47c9-be0b-7b479d234294" 
          alt="" 
        />

        <Img 
          ImgSelected={imgSelected === "3"}
          onClick={() => setImgSelected('3')}
          src="https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.48%20(1).jpeg?alt=media&token=537ccf9f-6f27-4d2c-b518-961757ff3605" 
          alt="" 
        />

        <Img 
          ImgSelected={imgSelected === "2"}
          onClick={() => setImgSelected('2')}
          src="https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.48.jpeg?alt=media&token=b01942b3-0d1f-4c14-9517-e2fef6ddde16" 
          alt="" 
        />
      </Header>
    
      <Episodes>
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
            {episodesArray?.map((episode, index) => {
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
                    <button type="button" onClick={() => episodesArray &&  playList(episodesArray, index)}>
                      {isPlaying ? (
                        <>
                        {currentEpisodeIndex === index ? (
                          <PlayingCss />
                        ) : (
                          <Play />
                        )}
                        </>
                      ) : (
                        <Play />
                      )}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Episodes>
    </Container>
  );
}