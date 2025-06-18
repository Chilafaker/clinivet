import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDewormingsByPatient = async (req: Request, res: Response) => {
  const { id } = req.params;

  const dewormings = await prisma.deworming.findMany({
    where: { patientId: id },
    include: { veterinarian: true }
  });

  res.json(dewormings);
};

export const createDeworming = async (req: Request, res: Response) => {
  const { id: patientId } = req.params;
  const { vetId, type, appliedDate, nextDose } = req.body;

  const newDeworming = await prisma.deworming.create({
    data: {
      patientId,
      vetId,
      type,
      appliedDate: new Date(appliedDate),
      nextDose: nextDose ? new Date(nextDose) : null
    }
  });

  res.status(201).json(newDeworming);
};
