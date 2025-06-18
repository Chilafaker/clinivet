// src/components/NewPatientModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

const NewPatientModal = ({ open, onClose, onSave }: Props) => {
  const [formData, setFormData] = useState({
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
    sexo: "",
    propietario: "",
    telefono: "",
    notas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
    setFormData({
      nombre: "",
      especie: "",
      raza: "",
      edad: "",
      sexo: "",
      propietario: "",
      telefono: "",
      notas: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Nuevo Paciente</DialogTitle>
        </DialogHeader>

        <div className="grid gap-3">
          <Input placeholder="Nombre del paciente" name="nombre" value={formData.nombre} onChange={handleChange} />
          <Input placeholder="Especie" name="especie" value={formData.especie} onChange={handleChange} />
          <Input placeholder="Raza" name="raza" value={formData.raza} onChange={handleChange} />
          <Input placeholder="Edad" name="edad" value={formData.edad} onChange={handleChange} />
          <Input placeholder="Sexo" name="sexo" value={formData.sexo} onChange={handleChange} />
          <Input placeholder="Propietario" name="propietario" value={formData.propietario} onChange={handleChange} />
          <Input placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
          <Textarea placeholder="Notas clínicas" name="notas" value={formData.notas} onChange={handleChange} />
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit}>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewPatientModal;
