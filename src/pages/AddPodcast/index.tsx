import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, BackButton, Divider, Img, Button } from './styles';
import { ChevronLeft } from '../../icons';
import { useCollection } from '@nandorojo/swr-firestore';
import { useAuth } from '../../hooks/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { firestore, storage } from '../../services/firebase';

import { ProgressBar } from '../../components/ProgressBar';

interface userAdminProps {
  idUser: string;
  name: string;
};

type podcastProps = {     
  title: string,
  members: string,
  published_at: string,
  thumbnail: string,
  category: string,
  description: string,
  file: {
    url: string,
    type: string,
    duration: number
  }
}

export const AddPodcast: React.FC = () => {

  const history = useHistory();
  const { user } = useAuth();

  const [imgSelected, setImgSelected] = useState('https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2F2206c6a6-d75b-4c15-b625-391bc2b46aec.jfif?alt=media&token=0c363a93-c12e-418a-903b-36deb6ae0270');
  const [category, setCategory] = useState('4');
  
  const [progress, setProgress] = useState(0);
  const [audioSelected, setAudioSelected] = useState('');
  const [audio, setAudio] = useState('');

  const { data: idAdmins } = useCollection<userAdminProps>('admins', {listen: true}); 

  const { register, handleSubmit } = useForm<podcastProps>();

  useEffect(() => {
    if(user === undefined) {
      history.push('/home');
    }

    if(user) {
      const adminReturn = idAdmins?.find(adminId => adminId.idUser === user.id);

      if(!adminReturn) {
        history.push('/myprofile');
      }
    }
  },[user, history, idAdmins]);

  const onSubmit: SubmitHandler<podcastProps> = async data => {
    data.thumbnail = imgSelected;

    if(audio === '') {
      alert('Selecione um audio');
      return;
    }

    if(category === '') {
      alert('Selecione uma categoria');
      return;
    }

    data.category = category;
    data.file.url = audio;

    await firestore.collection('Podcasts').add(data)
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

    history.push('/home')
  };

  const handleAudio = async (e: any) => {
    if(audioSelected !== '') {
      var desertRef = storage.ref().child(audioSelected);

      await desertRef.delete();

      setAudioSelected('');
    }

    if(e.target.files[0]){
      const uploadTask = storage.ref(`audios/${Date.now()}`).put(e.target.files[0]);
      
      uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);

      }, function(error) {
        alert('error');

      }, function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            setAudioSelected(uploadTask.snapshot.ref.fullPath);
            setAudio(downloadURL);
        });
      });
    };
  };

  return (
    <>
      <BackButton onClick={() => history.push('/myprofile')}>
        <ChevronLeft />
      </BackButton>
      
      <Container onSubmit={handleSubmit(onSubmit)}>

        <h2>Adicionar podcast</h2>

        <section className="areaImages">
          <h3>Escolha uma imagem</h3>

          <div>
            <Img 
              ImgSelected={imgSelected === "https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2F2206c6a6-d75b-4c15-b625-391bc2b46aec.jfif?alt=media&token=0c363a93-c12e-418a-903b-36deb6ae0270"}
              onClick={() => setImgSelected('https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2F2206c6a6-d75b-4c15-b625-391bc2b46aec.jfif?alt=media&token=0c363a93-c12e-418a-903b-36deb6ae0270')} 
              src="https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2F2206c6a6-d75b-4c15-b625-391bc2b46aec.jfif?alt=media&token=0c363a93-c12e-418a-903b-36deb6ae0270" 
              alt="" 
            />

            <Img 
              ImgSelected={imgSelected === "https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.47.jpeg?alt=media&token=04fa864b-9d4f-47c9-be0b-7b479d234294"}
              onClick={() => setImgSelected('https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.47.jpeg?alt=media&token=04fa864b-9d4f-47c9-be0b-7b479d234294')}
              src="https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.47.jpeg?alt=media&token=04fa864b-9d4f-47c9-be0b-7b479d234294" 
              alt="" 
            />

            <Img 
              ImgSelected={imgSelected === "https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.48%20(1).jpeg?alt=media&token=537ccf9f-6f27-4d2c-b518-961757ff3605"}
              onClick={() => setImgSelected('https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.48%20(1).jpeg?alt=media&token=537ccf9f-6f27-4d2c-b518-961757ff3605')}
              src="https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.48%20(1).jpeg?alt=media&token=537ccf9f-6f27-4d2c-b518-961757ff3605" 
              alt="" 
            />

            <Img 
              ImgSelected={imgSelected === "https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.48.jpeg?alt=media&token=b01942b3-0d1f-4c14-9517-e2fef6ddde16"}
              onClick={() => setImgSelected('https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.48.jpeg?alt=media&token=b01942b3-0d1f-4c14-9517-e2fef6ddde16')}
              src="https://firebasestorage.googleapis.com/v0/b/pocketcastgs2m.appspot.com/o/images%2FWhatsApp%20Image%202021-10-29%20at%2012.35.48.jpeg?alt=media&token=b01942b3-0d1f-4c14-9517-e2fef6ddde16" 
              alt="" 
            />
          </div>
        </section>

        <Divider />

        <section>
          <h3>Nome do Podcast</h3>

          <input type="text" {...register('title', {required: true})}/>
        </section>

        <Divider />

        <section>
          <h3>Membros que participaram do podcast</h3>

          <input type="text" {...register('members', {required: true})}/>
        </section>

        <Divider />

        <section>
          <h3>Quando que o podcast foi ou est?? sendo publicado?</h3>

          <input type="date" {...register('published_at', {required: true})}/>
        </section>

        <Divider />


        <section className="category">
          <h3>Qual a Categoria do audio?</h3>

          <div>
            <Button type="button" ButtonSelected={category === '4'} onClick={() => setCategory('4')}>Compila????o</Button>
            <Button type="button" ButtonSelected={category === '1'} onClick={() => setCategory('1')}>Momento Piada</Button>
            <Button type="button" ButtonSelected={category === '3'} onClick={() => setCategory('3')}>PocketCast</Button>
            <Button type="button" ButtonSelected={category === '2'} onClick={() => setCategory('2')}>Youcat</Button>
          </div>
        </section>

        <Divider />


        <section>
          <h3>Qual a descri????o do podcast? (escreva utilizando html)</h3>

          <textarea {...register('description', {required: true})}/>
        </section>

        <Divider />

        <section>
          <h3>Qual a dura????o do podcast? (colocar em segundos)</h3>

          <input type="number" min="0" {...register('file.duration', {required: true})}/>
        </section>

        <Divider />

        <section>
          <h3>Qual a extens??o desse audio? (EX: audio/mp3)</h3>

          <input type="text" {...register('file.type', {required: true})}/>
        </section>

        <Divider />

        <section className="addPodcast">
          <h3>Adicione o audio</h3>

          <div>
            <input type="file" onChange={handleAudio}/>

            {progress !== 0 && (
              <ProgressBar progress={progress}/>
            )}
          </div>
        </section>

        <div>
          <button type="submit">Salvar</button>
        </div>
      </Container>
    </>
  );
}