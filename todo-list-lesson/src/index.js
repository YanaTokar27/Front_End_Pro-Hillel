import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './pages/TodoList/TodoList';
import AppRouter from './router';
import { Provider } from 'react-redux';
import store from './modules/store';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
