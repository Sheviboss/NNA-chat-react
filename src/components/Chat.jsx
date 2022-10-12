import { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { collection, Timestamp } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import Message from './Message';
import Header from './Header';

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');

  const sendMessage = async () => {
    await addDoc(collection(firestore, 'messages'), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      email: user.email,
      createdAt: Timestamp.fromDate(new Date()),
    });
    setValue('');
  };
  return (
    <>
      <Header title="ЧАТ" />
      <div className="container-chat">
        <Message />
      </div>
      <div className="chat-buttons">
        <input
          className="inputtext"
          type="text"
          value={value}
          placeholder="введите сообщение"
          onChange={(e) => setValue(e.target.value)}></input>
        <button
          disabled={value ? '' : 'disabled'}
          onClick={() => (value ? sendMessage() : alert('введите сообщение'))}>
          Отправить
        </button>
      </div>
    </>
  );
};

export default Chat;
