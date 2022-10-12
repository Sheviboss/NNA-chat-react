import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '..';
import { collection, query, orderBy } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Header = ({ title }) => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, error] = useCollectionData(
    query(collection(firestore, 'messages'), orderBy('createdAt')),
  );
  return (
    <div className="header">
      <div className="header-inner">
        {user ? (
          <div className="user-header">
            <h3>
              Добро пожаловать в чат <b>{user.displayName}</b>
            </h3>
            <button onClick={() => signOut(auth)}>выйти</button>
          </div>
        ) : (
          <div>NNA Chat v1.0</div>
        )}
      </div>
      {user ? <h1 className="tittle">{title}</h1> : ''}
    </div>
  );
};

export default Header;
