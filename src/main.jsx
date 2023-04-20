import '@/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyles from '@/GlobalStyles';

import App from './App';
import { persistor, store } from './app/store';
import { DeviceInfoProvider } from './contexts/device-info-context';
import { ThemeProvider } from './contexts/theme-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider initialTheme='light'>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DeviceInfoProvider>
          <BrowserRouter>
            <ErrorBoundary FallbackComponent={''}>
              <App />
            </ErrorBoundary>
          </BrowserRouter>
        </DeviceInfoProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
