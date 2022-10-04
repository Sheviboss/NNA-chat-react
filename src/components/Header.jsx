import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '..';

const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <div className="header-inner">
        {user ? (
          <div className="user-header">
            <h3>
              Добро пожаловать в чат <b>{user.displayName}!</b>
            </h3>
            <button onClick={() => signOut(auth)}>выйти</button>
          </div>
        ) : (
          <div>NNA Chat v1.0</div>
        )}
      </div>
      <h1 className="tittle">Чат</h1>
    </div>
  );
};

export default Header;
