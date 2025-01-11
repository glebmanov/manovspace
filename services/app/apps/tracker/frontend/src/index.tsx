import React from 'react';
import store from 'store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'client';
import 'assets/index.scss';

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}
