import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, BackButton, Divider, Img } from './styles';
import { ChevronLeft } from '../../icons';
import { useCollection } from '@nandorojo/swr-firestore';
import { useAuth } from '../../hooks/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { firestore, storage } from '../../services/firebase';

interface userAdminProps {
  idUser: string;
  name: string;
};

type podcastProps = {     
  title: string,
  members: string,
  published_at: string,
  thumbnail: string,
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

    data.file.url = audio;

    await firestore.collection('Podcasts').add(data)
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

    history.push('/home')
  };

  const handleAudio = async (e: any) => {
    if(e.target.files[0]){
      const uploadTask = await storage.ref(`audios/${Date.now()}`).put(e.target.files[0]);

      uploadTask.ref.getDownloadURL().then(function(downloadURL) {
        setAudio(downloadURL)
      })
    }
  }

  return (
    <>
      <BackButton onClick={() => history.push('/myprofile')}>
        <ChevronLeft />
      </BackButton>
      
      <Container onSubmit={handleSubmit(onSubmit)}>

        <h2>Adicionar podcast</h2>

        {/* <Divider /> */}

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
          <h3>Quando que o podcast foi ou está sendo publicado?</h3>

          <input type="date" {...register('published_at', {required: true})}/>
        </section>

        <Divider />


        <section>
          <h3>Qual a descrição do podcast? (escreva utilizando html)</h3>

          <textarea {...register('description', {required: true})}/>
        </section>

        <Divider />

        <section>
          <h3>Qual a duração do podcast? (colocar em segundos)</h3>

          <input type="number" min="0" {...register('file.duration', {required: true})}/>
        </section>

        <Divider />

        <section>
          <h3>Qual a extensão desse audio? (EX: audio/mp3)</h3>

          <input type="text" {...register('file.type', {required: true})}/>
        </section>

        <Divider />

        <section>
          <h3>Adicione o audio</h3>

          <input type="file" onChange={handleAudio}/>
        </section>

        <div>
          <button type="submit">Salvar</button>
        </div>
      </Container>
    </>
  );
}