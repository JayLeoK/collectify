import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { initializeApp } from 'firebase/app';
 
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4yCbe_4m3nGQDB864NtYEdU7xYpDh9bg",
  authDomain: "dark-carport-268901.firebaseapp.com",
  projectId: "dark-carport-268901",
  storageBucket: "dark-carport-268901.appspot.com",
  messagingSenderId: "575650731597",
  appId: "1:575650731597:web:e003614d02bd555934ee04",
  measurementId: "G-LN4L2WECK2"
};

initializeApp(firebaseConfig);


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
