import { useState } from "react";
import {
  Plus,
  X,
  UserPlus,
  CalendarPlus,
  Stethoscope,
  Syringe,
  ShieldCheck,
  ShowerHead,
  HeartPulse,
  ShoppingCart,
  ClipboardList,
  BellPlus
} from "lucide-react";

const actions = [
  { label: "Nuevo paciente", icon: <UserPlus size={20} />, onClick: () => console.log("Nuevo paciente") },
  { label: "Nueva cita", icon: <CalendarPlus size={20} />, onClick: () => console.log("Nueva cita") },
  { label: "Nueva consulta", icon: <Stethoscope size={20} />, onClick: () => console.log("Nueva consulta") },
  { label: "Nueva vacuna", icon: <Syringe size={20} />, onClick: () => console.log("Nueva vacuna") },
  { label: "Desparasitación", icon: <ShieldCheck size={20} />, onClick: () => console.log("Desparasitación") },
  { label: "Baño", icon: <ShowerHead size={20} />, onClick: () => console.log("Baño") },
  { label: "Cirugía", icon: <HeartPulse size={20} />, onClick: () => console.log("Cirugía") },
  { label: "Venta", icon: <ShoppingCart size={20} />, onClick: () => console.log("Venta") },
  { label: "Seguimiento", icon: <ClipboardList size={20} />, onClick: () => console.log("Seguimiento") },
  { label: "Recordatorio", icon: <BellPlus size={20} />, onClick: () => console.log("Recordatorio") },
];

const FabQuickActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {open && (
        <div className="space-y-2 mb-2">
          {actions.map((action, idx) => (
            <button
              key={idx}
              onClick={() => {
                action.onClick();
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white text-sm rounded-lg shadow transition hover:bg-gray-100"
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
      >
        {open ? <X size={24} /> : <Plus size={24} />}
      </button>
    </div>
  );
};

export default FabQuickActions;
