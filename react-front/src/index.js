import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Omakomponentti from './Omakomponentti';
import Omakomponentti2 from './Omakomponentti2';
import Omakomponentti3 from './Omakomponentti3';
//import TodoKomponentti from './ToDoKomponentti';

ReactDOM.render(
  <React.StrictMode>
    
    <Omakomponentti />
    <Omakomponentti2 />
    <Omakomponentti3 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();