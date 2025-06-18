import { PrismaClient, Role, PatientStatus } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Usuarios
  await prisma.user.createMany({
    data: [
      { name: 'Admin General', email: 'admin@clinivet.com', role: Role.ADMIN },
      { name: 'Dra. Itzel Flores', email: 'itzel@clinivet.com', role: Role.VET },
      { name: 'Carlos Asistente', email: 'asistente@clinivet.com', role: Role.ASSISTANT }
    ]
  });

  // Productos
  await prisma.product.createMany({
    data: [
      { name: 'Antipulgas NexGard', price: 450, stock: 50 },
      { name: 'Alimento Royal Canin', price: 890, stock: 30 },
      { name: 'Jabón Dermatológico', price: 120, stock: 70 }
    ]
  });

  // Servicios
  await prisma.service.createMany({
    data: [
      { name: 'Consulta general', price: 300, duration: 30 },
      { name: 'Baño spa', price: 250, duration: 45 },
      { name: 'Profilaxis dental', price: 750, duration: 60 }
    ]
  });

  // Clínica
  await prisma.clinicSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Clinivet Coyoacán',
      address: 'Calle Los Colorines 60, Coyoacán, CDMX',
      phone: '555-678-4321',
      email: 'contacto@clinivet.com',
      logoUrl: 'https://via.placeholder.com/120x60?text=Clinivet'
    }
  });

  // Pacientes
  for (let i = 1; i <= 10; i++) {
    await prisma.patient.create({
      data: {
        name: `Mascota ${i}`,
        species: i % 2 === 0 ? 'Perro' : 'Gato',
        breed: `Raza ${i}`,
        gender: i % 2 === 0 ? 'Macho' : 'Hembra',
        birthdate: new Date(2018, i, i),
        status: PatientStatus.ACTIVE,
        ownerName: `Propietario ${i}`,
        ownerPhone: `555-1234-00${i}`,
        ownerEmail: `propietario${i}@correo.com`
      }
    });
  }

  console.log('✅ Datos dummy insertados correctamente');
}

main()
  .catch((e) => {
    console.error('❌ Error al insertar datos:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
