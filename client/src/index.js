import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { Provider } from 'react-redux'
import store from './redux/store.js';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'

// other icons will be used 
import { faShoppingCart, faEye, faEyeSlash, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faEye, faEyeSlash, faHeart, faTrash)


ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
