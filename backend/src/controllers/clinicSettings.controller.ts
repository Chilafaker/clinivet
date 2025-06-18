import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getClinicSettings = async (req: Request, res: Response) => {
  let settings = await prisma.clinicSettings.findUnique({ where: { id: 1 } });

  // Si no existen, creamos configuración inicial vacía
  if (!settings) {
    settings = await prisma.clinicSettings.create({
      data: {
        id: 1,
        name: 'Clinivet',
        address: '',
        phone: '',
        email: '',
        logoUrl: ''
      }
    });
  }

  res.json(settings);
};

export const updateClinicSettings = async (req: Request, res: Response) => {
  const { name, address, phone, email, logoUrl } = req.body;

  const updated = await prisma.clinicSettings.update({
    where: { id: 1 },
    data: { name, address, phone, email, logoUrl }
  });

  res.json(updated);
};
