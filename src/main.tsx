import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'; // Import AuthProvider

createRoot(document.getElementById("root")!).render(
  <AuthProvider> {/* Wrap App with AuthProvider */}
    <App />
  </AuthProvider>
);