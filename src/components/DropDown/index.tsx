import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Container, Overlay } from './styles';

export const DropDown: React.FC = () => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);
  const onClick = () => setIsActive(!isActive);

  const { user, signOut } = useAuth();

  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    setIsActive(false);
  },[location.pathname])

  return (
    <>
    {isActive && <Overlay onClick={onClick}/>}

    <Container>
      {user !== undefined ? (
        <button onClick={onClick} className="menu-trigger">
          <span>{user.name}</span>
          <img src={user.avatar} alt={user.name} />
        </button>
      ) : (
        <button onClick={onClick} className="menu-trigger">
          <span>undefined</span>
          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
        </button>
      )}
      
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {user !== undefined ? (
            <>
            <li onClick={() => history.push('/home')}>Home</li>
            <li onClick={() => history.push('/myprofile')}>Meu Perfil</li>
            <li className="logout" onClick={signOut}>Logout</li>
            </>
          ) : (
            <li className="login" onClick={() => history.push('/')}>
              Fazer Login
            </li>
          )}
        </ul>
      </nav>
    </Container> 
    </> 
  );
}