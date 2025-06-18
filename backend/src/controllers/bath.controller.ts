import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBathsByPatient = async (req: Request, res: Response) => {
  const { id } = req.params;

  const baths = await prisma.bath.findMany({
    where: { patientId: id },
    orderBy: { date: 'desc' }
  });

  res.json(baths);
};

export const createBath = async (req: Request, res: Response) => {
  const { id: patientId } = req.params;
  const { date, type, notes } = req.body;

  const newBath = await prisma.bath.create({
    data: {
      patientId,
      date: new Date(date),
      type,
      notes
    }
  });

  res.status(201).json(newBath);
};
