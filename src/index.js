import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { StateProvider } from './utils/StateProvider';
import reducer, { initialState } from './utils/reducer';
=======
>>>>>>> 403123073a2f292121ba610a89d56da4a20b1128


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>
    
  </React.StrictMode>
);

<<<<<<< HEAD
=======

>>>>>>> 403123073a2f292121ba610a89d56da4a20b1128
