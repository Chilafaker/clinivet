// src/routes/AppRouter.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import MainLayout from '../layout/MainLayout';
import { useAuthStore } from '../store/auth';

const AppRouter = () => {
  const { user } = useAuthStore();

  return (
    <Routes>
      {/* Ruta pública de login */}
      {!user && <Route path="/login" element={<Login />} />}

      {/* Rutas privadas dentro del layout principal */}
      {user && (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          {/* Aquí puedes seguir agregando más rutas internas */}
        </Route>
      )}

      {/* Redirección segura por defecto */}
      <Route path="*" element={<Navigate to={user ? '/' : '/login'} replace />} />
    </Routes>
  );
};

export default AppRouter;
