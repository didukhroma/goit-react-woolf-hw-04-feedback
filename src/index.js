import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/App';
import GlobalProvider from 'context/GlobalProvider';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
