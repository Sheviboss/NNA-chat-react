import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { Context } from '..';
import { useContext } from 'react';
import Header from './Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { auth, firestore } = useContext(Context);
  const [messages, error] = useCollectionData(
    query(collection(firestore, 'messages'), orderBy('createdAt')),
  );
  const [user] = useAuthState(auth);
  const Profile = useSelector((state) => state.profile.value);
  return (
    <>
      <Header title={`Профиль пользователя ${Profile[0]}`} />
      <div className="profile">
        <div className="profileName">
          Никнэйм пользователя: <b>{Profile[0]}</b>
        </div>
        <div className="profileImg">
          Аватар пользователя:
          <img src={Profile[1]} />
        </div>
        {Profile[2] && (
          <div className="profile-email">
            email пользователя: <b>{Profile[2]}</b>
          </div>
        )}

        <Link to="/">
          <button className="backButton">Назад</button>
        </Link>
      </div>
    </>
  );
};

export default UserProfile;
