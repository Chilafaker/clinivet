// src/components/FabButton.tsx
import { Plus } from "lucide-react";
import { useState } from "react";
import NewPatientModal from "./NewPatientModal";

const FabButton = () => {
  const [open, setOpen] = useState(false);

  const handleSave = (data: any) => {
    console.log("🐾 Paciente guardado (dummy):", data);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-xl text-sm font-medium flex items-center gap-2 transition-all duration-200"
      >
        <Plus className="w-4 h-4" />
        Nueva cita
      </button>

      <NewPatientModal open={open} onClose={() => setOpen(false)} onSave={handleSave} />
    </>
  );
};

export default FabButton;
