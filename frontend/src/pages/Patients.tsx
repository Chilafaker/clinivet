// pages/Patients.tsx
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

// Dummy data
const dummyPatients = [
  {
    id: 1,
    name: 'Max',
    species: 'Perro',
    breed: 'Labrador',
    owner: 'Carlos Pérez',
    age: '5 años'
  },
  {
    id: 2,
    name: 'Mía',
    species: 'Gato',
    breed: 'Persa',
    owner: 'Laura Sánchez',
    age: '2 años'
  },
  {
    id: 3,
    name: 'Toby',
    species: 'Perro',
    breed: 'Chihuahua',
    owner: 'Mario López',
    age: '3 años'
  }
];

const Patients = () => {
  const [patients, setPatients] = useState(dummyPatients);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setPatients(
      dummyPatients.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.owner.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="px-4 md:px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Pacientes</h2>
        <Button>+ Nuevo paciente</Button>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Buscar por nombre o propietario..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {patients.map(p => (
          <Card key={p.id}>
            <CardContent className="p-4">
              <div className="text-lg font-semibold text-gray-800">{p.name}</div>
              <div className="text-sm text-gray-500">{p.species} - {p.breed}</div>
              <div className="text-sm text-gray-600 mt-1">Propietario: {p.owner}</div>
              <div className="text-sm text-gray-600">Edad: {p.age}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Patients;
