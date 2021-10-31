import React, { useEffect } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Container, BackButton } from './styles';
import { ChevronLeft, Trash } from '../../icons';
import { useCollection } from '@nandorojo/swr-firestore';
import { firestore } from '../../services/firebase';
import { useHistory } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

interface userAdminProps {
  idUser: string;
  name: string;
};

export const UsersAdmin: React.FC = () => {

  const history = useHistory();
  const { user } = useAuth();

  const { register, handleSubmit } = useForm<userAdminProps>();

  const { data: userAdminArray } = useCollection<userAdminProps>('admins', {listen: true}); 

  const { data: idAdmins } = useCollection<userAdminProps>('admins', {listen: true}); 
  
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


  function deleteDoc(id: string) {
    firestore.collection('admins').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  const onSubmit: SubmitHandler<userAdminProps> = data => {
    firestore.collection('admins').add(data)
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  };

  return (
    <>
      <BackButton onClick={() => history.push('/myprofile')}>
        <ChevronLeft />
      </BackButton>

      <Container>
        <main>
          <h3>Administradores</h3>
          
          {userAdminArray?.map(user => (
            <div key={user.id}>
              <p>Nome: <span>{user.name}</span></p>
              <p>ID: <span>{user.idUser}</span></p>

              <button onClick={() => deleteDoc(user.id)}>
                <Trash />
              </button>
            </div>
          ))}
        </main>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Cadastrar Admin</h3>

          <label>
            Nome: 
            <input type="text" {...register('name', {required: true})}/>
          </label>

          <label>
            ID: 
            <input type="text" {...register('idUser', {required: true})}/>
          </label>

          <button type="submit">
            Salvar
          </button>
        </form>
      </Container>
    </>
  );
}