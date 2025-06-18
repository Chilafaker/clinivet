// src/layout/Header.tsx
import { Menu, LogOut } from "lucide-react";
import { useUIStore } from "../store/ui";
import { useAuthStore } from "../store/auth";

const Header = () => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const { user, logout } = useAuthStore();

  return (
    <header className="w-full bg-white px-6 py-4 shadow flex items-center justify-between">
      {/* Botón hamburguesa SOLO visible en móvil */}
      <button onClick={toggleSidebar} className="md:hidden" aria-label="Toggle menu">
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      <h1 className="text-xl font-bold text-gray-800 hidden md:block">Dashboard</h1>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700">{user?.role || "Admin General"}</span>
        <button onClick={logout} aria-label="Cerrar sesión">
          <LogOut className="w-5 h-5 text-red-500 hover:text-red-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
