import React, { useEffect, useRef, useState } from 'react';

import headphone from '../../assets/headphone.svg'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import { Container, ImgGroup, Footer, ButtonMain, ButtonSecondary, CurrentEpisode, Progress, ContainerLittle } from './styles';
import * as Icons from '../../icons';
import { useLocation } from 'react-router-dom';

export const Player: React.FC = () => {

  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [progress, setProgress] = useState(0);

  const location = useLocation();

  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying,
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    clearPlayerState
  } = usePlayer();

  
    
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  function setupProgressListener() {
    if(audioRef.current !== null) {
      audioRef.current.currentTime = 0;
      
      audioRef.current.addEventListener('timeupdate', () => {
        if(audioRef.current !== null) {
          setProgress(Math.floor(audioRef.current.currentTime));
        }
      });
    }
  };

  function handleSeek(amount: number) {
    if(audioRef.current !== null) {
      audioRef.current.currentTime = amount;
      setProgress(amount);
    }
  };

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    };
  };

  const episode = episodeList[currentEpisodeIndex];

  const [isActive, setIsActive] = useState(false);
  function toggleActive() {setIsActive(!isActive)}

  return (
    <>
    {location.pathname !== '/' && !location.pathname.startsWith('/myprofile') && (
      <>
      { episode && (
        <audio 
          src={episode.file.url}
          ref={audioRef}
          loop={isLooping}
          autoPlay
          onEnded={handleEpisodeEnded}
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
          onLoadedMetadata={setupProgressListener}
        />
      )}

      {!isActive ? (
        <ContainerLittle>
          <button onClick={toggleActive} className="button">
            <Icons.ChevronUp />
          </button>

          <ImgGroup className="disabledImgGroup">
            <img src={headphone} alt="" />

            {isPlaying
                ? <p>Tocando agora</p>
                : <p>Selecione um audio</p>
              }
          </ImgGroup>

          <ButtonSecondary
              type="button" 
              onClick={playPrevious} 
              disabled={!episode || !hasPrevious}
            >
              <Icons.SkipLeft/>
            </ButtonSecondary>

            <ButtonMain
              type="button"
              disabled={!episode}
              onClick={togglePlay}
            >
              {isPlaying
                ? <Icons.Pause/>
                : <Icons.Play/>
              }
            </ButtonMain>

            <ButtonSecondary
              type="button" 
              onClick={playNext} 
              disabled={!episode || !hasNext}
            >
              <Icons.SkipRight/>
            </ButtonSecondary>
        </ContainerLittle>
      ) : (
        <Container className="containerTotal">
          <button onClick={toggleActive} className="button">
            <Icons.ChevronDown />
          </button>
          
        <ImgGroup>
          <img src={headphone} alt="" />

          <p>Tocando agora</p>

          
        </ImgGroup>

        {episode ? (
          <CurrentEpisode>
            <img 
              src={episode.thumbnail} 
              alt="episode"
            />
            <strong>{episode.title}</strong>
            <span>{episode.members}</span>
          </CurrentEpisode>
        ) : (
          <div className="boxInActive">
            Selecione um podcast para ouvir.
          </div>
        )}

        <Footer>
          <Progress>
            <span>{convertDurationToTimeString(progress)}</span>
            <div className='slider'>
              {episode ? (
                <Slider
                  max={episode.file.duration}
                  value={progress}
                  onChange={handleSeek}
                  trackStyle={{ backgroundColor: '#ff002b' }}
                  railStyle={{ backgroundColor: '#004e89' }}
                  handleStyle={{ borderColor: '#ff002b', borderWidth: 4 }}
                />
              ) : (
                <div className='emptySlider' />
              )}
            </div>
            <span>{convertDurationToTimeString(episode?.file.duration ?? 0)}</span>
          </Progress>
          
          <div>
            <ButtonSecondary
              type="button" 
              disabled={!episode || episodeList.length === 1}
              onClick={toggleShuffle}
              className={isShuffling ? 'isActive' : ''}
            >
              <Icons.Random/>
            </ButtonSecondary>

            <ButtonSecondary
              type="button" 
              onClick={playPrevious} 
              disabled={!episode || !hasPrevious}
            >
              <Icons.SkipLeft/>
            </ButtonSecondary>

            <ButtonMain
              type="button"
              disabled={!episode}
              onClick={togglePlay}
            >
              {isPlaying
                ? <Icons.Pause/>
                : <Icons.Play/>
              }
            </ButtonMain>

            <ButtonSecondary
              type="button" 
              onClick={playNext} 
              disabled={!episode || !hasNext}
            >
              <Icons.SkipRight/>
            </ButtonSecondary>

            <ButtonSecondary
              type="button" 
              disabled={!episode}
              onClick={toggleLoop}
              className={isLooping ? 'isActive' : ''}
            >
              <Icons.Loop/>
            </ButtonSecondary>
          </div>
        </Footer>
      </Container>
      )}

      <Container>
        <ImgGroup>
          <img src={headphone} alt="" />

          <p>Tocando agora</p>
        </ImgGroup>

        {episode ? (
          <CurrentEpisode>
            <img 
              src={episode.thumbnail} 
              alt="episode"
            />
            <strong>{episode.title}</strong>
            <span>{episode.members}</span>
          </CurrentEpisode>
        ) : (
          <div className="boxInActive">
            Selecione um podcast para ouvir.
          </div>
        )}

        <Footer>
          <Progress>
            <span>{convertDurationToTimeString(progress)}</span>
            <div className='slider'>
              {episode ? (
                <Slider
                  max={episode.file.duration}
                  value={progress}
                  onChange={handleSeek}
                  trackStyle={{ backgroundColor: '#ff002b' }}
                  railStyle={{ backgroundColor: '#004e89' }}
                  handleStyle={{ borderColor: '#ff002b', borderWidth: 4 }}
                />
              ) : (
                <div className='emptySlider' />
              )}
            </div>
            <span>{convertDurationToTimeString(episode?.file.duration ?? 0)}</span>
          </Progress>
          
          <div>
            <ButtonSecondary
              type="button" 
              disabled={!episode || episodeList.length === 1}
              onClick={toggleShuffle}
              className={isShuffling ? 'isActive' : ''}
            >
              <Icons.Random/>
            </ButtonSecondary>

            <ButtonSecondary
              type="button" 
              onClick={playPrevious} 
              disabled={!episode || !hasPrevious}
            >
              <Icons.SkipLeft/>
            </ButtonSecondary>

            <ButtonMain
              type="button"
              disabled={!episode}
              onClick={togglePlay}
            >
              {isPlaying
                ? <Icons.Pause/>
                : <Icons.Play/>
              }
            </ButtonMain>

            <ButtonSecondary
              type="button" 
              onClick={playNext} 
              disabled={!episode || !hasNext}
            >
              <Icons.SkipRight/>
            </ButtonSecondary>

            <ButtonSecondary
              type="button" 
              disabled={!episode}
              onClick={toggleLoop}
              className={isLooping ? 'isActive' : ''}
            >
              <Icons.Loop/>
            </ButtonSecondary>
          </div>
        </Footer>
      </Container>   
    </>
    )}
    </>
  );
}