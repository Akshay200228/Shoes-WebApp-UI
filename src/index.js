import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Preloader from './constants/Preloader';
import ErrorBoundary from './constants/ErrorBoundary'
import { DarkModeProvider } from './context/DarkModeContext';
import { CursorProvider } from './context/CursorContext'; // Import CursorProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        <CursorProvider>
          <DarkModeProvider>
            <App />
          </DarkModeProvider>
        </CursorProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);


reportWebVitals();
