import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import AppContainer from './AppContainer';

import './18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppContainer />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
