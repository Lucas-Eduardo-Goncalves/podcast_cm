import { useCollection } from '@nandorojo/swr-firestore';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Container, Hero } from './styles';

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

    if(user) {
      const adminReturn = idAdmins?.find(adminId => adminId.idUser === user.id);

      if(adminReturn) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }
  },[user, history, idAdmins, isAdmin]);

  return (
    <Container>
      <Hero>
        <div className="userLeft">
          <img src={user?.avatar} alt={user?.name} />

          <section>
            <h3>Nome: </h3>
            <p>{user?.name}</p>
          </section>

          <section>
            <h3>Id: </h3>
            <p>{user?.id}</p>
          </section>
        </div>

        {isAdmin && (
          <div className="admin">
            <p>Admin</p>
          </div>
        )}
        
        {!isAdmin && (
          <div className="user">
            <p>Usuário</p>
          </div>
        )}
      </Hero>
    </Container>
  );
}