import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { useContext } from 'react';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getProfileData } from '../redux/slices/ProfileSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Message = () => {
  const { auth, firestore } = useContext(Context);
  const [messages, error] = useCollectionData(
    query(collection(firestore, 'messages'), orderBy('createdAt')),
  );
  const [user] = useAuthState(auth);
  console.log(click);
  const dispatch = useDispatch();
  return (
    <div className="messages">
      {messages &&
        messages.map((message) => (
          <div
            key={message.createdAt}
            className={user.uid === message.uid ? 'message_inner' : 'message_inner-right'}>
            <div
              className="user-info"
              onClick={() =>
                dispatch(getProfileData([message.displayName, message.photoURL, message.email]))
              }>
              <img className="photo" src={message.photoURL} />
              <Link to="/profile">
                <h3 className="name">{message.displayName}</h3>
              </Link>
            </div>
            <p className="text">{message.text}</p>
          </div>
        ))}
    </div>
  );
};

export default Message;
