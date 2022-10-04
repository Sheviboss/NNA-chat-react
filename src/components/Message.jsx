import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { useContext } from 'react';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';

const Message = () => {
  const { auth, firestore } = useContext(Context);
  const [messages, error] = useCollectionData(
    query(collection(firestore, 'messages'), orderBy('createdAt')),
  );
  const [user] = useAuthState(auth);
  return (
    <div className="messages">
      {messages
        ? messages.map((message) => (
            <div
              key={message.createdAt}
              className={user.uid === message.uid ? 'message_inner' : 'message_inner-right'}>
              <div className="user-info">
                <img className="photo" src={message.photoURL} />
                <h3 className="name">{message.displayName}</h3>
              </div>
              <p className="text">{message.text}</p>
            </div>
          ))
        : ''}
    </div>
  );
};

export default Message;
