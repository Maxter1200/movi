import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtWDi6ChOleiVGjYV4mt7L1WajiGU5lfc",
  authDomain: "movi-coder.firebaseapp.com",
  projectId: "movi-coder",
  storageBucket: "movi-coder.appspot.com",
  messagingSenderId: "947130018945",
  appId: "1:947130018945:web:68a1f0fd8558c32d6f3180"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
