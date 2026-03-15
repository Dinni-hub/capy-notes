import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Catatan baru tersedia. Muat ulang?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('Aplikasi siap digunakan secara offline!');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
