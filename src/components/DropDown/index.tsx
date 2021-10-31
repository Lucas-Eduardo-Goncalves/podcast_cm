import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Container, Overlay } from './styles';

import * as Icons from '../../icons';

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
      <button onClick={onClick} className="menu-trigger">
        <Icons.Menu />
      </button>

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