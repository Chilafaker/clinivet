import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getVaccinesByPatient = async (req: Request, res: Response) => {
  const { id } = req.params;

  const vaccines = await prisma.vaccine.findMany({
    where: { patientId: id },
    include: { veterinarian: true }
  });

  res.json(vaccines);
};

export const createVaccine = async (req: Request, res: Response) => {
  const { id: patientId } = req.params;
  const { vetId, type, batch, appliedDate, nextDose } = req.body;

  const newVaccine = await prisma.vaccine.create({
    data: {
      patientId,
      vetId,
      type,
      batch,
      appliedDate: new Date(appliedDate),
      nextDose: nextDose ? new Date(nextDose) : null
    }
  });

  res.status(201).json(newVaccine);
};

