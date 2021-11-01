import React, { useEffect, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Container, BackButton, ContainerForm, Buttons } from './styles';
import { ChevronLeft, UserAdd } from '../../icons';
import { useCollection } from '@nandorojo/swr-firestore';
import { firestore } from '../../services/firebase';
import { useHistory } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

import Modal from 'react-modal';

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

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  
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

  const onSubmit: SubmitHandler<userAdminProps> = data => {
    data.idUser = data.idUser.trim();
    
    firestore.collection('admins').add(data)
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

    handleCloseModal()
  };


  return (
    <>
      <Buttons>
        <BackButton onClick={() => history.push('/myprofile')}>
          <ChevronLeft />
        </BackButton>

        <BackButton onClick={handleOpenModal}>
          <UserAdd />
        </BackButton>
      </Buttons>

      <Container>
        <main>
          <h3>Administradores</h3>
          
          {userAdminArray?.map(user => (
            <div key={user.id}>
              <p>Nome: <span>{user.name}</span></p>
              <p>ID: <span>{user.idUser}</span></p>
            </div>
          ))}
        </main>
      </Container>

      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

      <button type="button" onClick={handleCloseModal} className="react-modal-close">
        x
      </button>
      
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
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
      </ContainerForm>
    </Modal> 
    </>
  );
}