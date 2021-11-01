import { useCollection } from '@nandorojo/swr-firestore';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Container, Hero, AreaButtons } from './styles';

interface admins {
  name: string;
  idUser: string;
}

export const Profile: React.FC = () => {

  const { user } = useAuth();
  const history = useHistory();

  const [isAdmin, setIsAdmin] = useState(false);

  const { data: idAdmins } = useCollection<admins>('admins', {listen: true}); 
  
  useEffect(() => {
    if(user === undefined) {
      history.push('/home');
    }

    if(user && idAdmins) {
      const adminReturn = idAdmins.findIndex(adminId => adminId.idUser.trim() === user.id.trim());

      if(adminReturn >= 0) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }
  },[user, history, idAdmins, isAdmin]);

  return (
    <Container>
      <Hero>
          <img src={user?.avatar} alt={user?.name} />

          <section>
            <h3>Nome: </h3>
            <p>{user?.name}</p>
          </section>

          <section>
            <h3>Id: </h3>
            <p>{user?.id}</p>
          </section>

          <section>
            <h3>Permissão:</h3>

            {isAdmin && (
              <p className="admin">
                Admin
              </p>
            )}

            {!isAdmin && (
              <p className="user">
                Usuário
              </p>
            )}
          </section>
      </Hero>

      {isAdmin && (
        <AreaButtons>
          <button onClick={() => history.push("/myprofile/users")} >Controle de usuários</button>
          <button onClick={() => history.push("/myprofile/addpodcast")} >Adicionar podcast</button>
          <button disabled>Em breve...</button>
        </AreaButtons>
      )}
    </Container>
  );
}