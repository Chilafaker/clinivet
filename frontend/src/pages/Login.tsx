// pages/Login.tsx
import { useAuthStore } from '../store/auth';

const Login = () => {
  const { login } = useAuthStore();

  const handleLogin = () => {
    login({ name: 'Admin General' });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Entrar como Admin
        </button>
      </div>
    </div>
  );
};

export default Login;