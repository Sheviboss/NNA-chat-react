import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './components/AppRoutes';
import Loader from './components/Loader';
import { useContext } from 'react';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loader />;
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
