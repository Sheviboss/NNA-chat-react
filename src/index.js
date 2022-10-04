import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCPgeslWtAz00u_VRAiFjIBrtQmpK_dHCA',
  authDomain: 'first-chat-31a21.firebaseapp.com',
  projectId: 'first-chat-31a21',
  storageBucket: 'first-chat-31a21.appspot.com',
  messagingSenderId: '766464634441',
  appId: '1:766464634441:web:4cd2488d334e921493d998',
  measurementId: 'G-C3NNEBZPT6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth();

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{
      app,
      firestore,
      auth,
    }}>
    <App />
  </Context.Provider>,
);
