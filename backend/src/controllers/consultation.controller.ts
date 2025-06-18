import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getConsultationsByPatient = async (req: Request, res: Response) => {
  const { id } = req.params;

  const consultations = await prisma.consultation.findMany({
    where: { patientId: id },
    include: { veterinarian: true }
  });

  res.json(consultations);
};

export const createConsultation = async (req: Request, res: Response) => {
  const { id: patientId } = req.params;
  const { vetId, date, notes, diagnosis, treatment } = req.body;

  const newConsultation = await prisma.consultation.create({
    data: { patientId, vetId, date: new Date(date), notes, diagnosis, treatment }
  });

  res.status(201).json(newConsultation);
};
