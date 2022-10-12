import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { Context } from '..';
import Header from './Header';

const Login = () => {
  const { auth } = useContext(Context);
  const LoginIn = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
  };
  return (
    <>
      <Header title="" />
      <div className="container">
        <button className="googlebtn" onClick={LoginIn}>
          Войти с помощью Google
        </button>
      </div>
    </>
  );
};
export default Login;
