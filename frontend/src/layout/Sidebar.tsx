// src/layout/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { useUIStore } from "../store/ui";
import { cn } from "../lib/utils";
import { useEffect } from "react";

const Sidebar = () => {
  const isOpen = useUIStore((state) => state.sidebarOpen);
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/pacientes", label: "Pacientes" },
    { to: "/agenda", label: "Agenda" },
    { to: "/venta", label: "Punto de venta" },
    { to: "/reportes", label: "Reportes" },
    { to: "/settings", label: "Settings" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeSidebar();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeSidebar]);

  return (
    <aside
      className={cn(
        "bg-[#0a1536] text-white w-64 h-screen p-6 space-y-4 fixed top-0 left-0 transform transition-transform duration-300 ease-in-out z-40 md:translate-x-0 md:relative md:block",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <h2 className="text-xl font-bold mb-4">CLINIVET PRO</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeSidebar}
            className={({ isActive }) =>
              cn(
                "px-4 py-2 rounded hover:bg-blue-800",
                isActive ? "bg-white text-[#0a1536] font-semibold" : "text-white"
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
