import { Request, Response } from 'express';
import { PrismaClient, PatientStatus } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPatients = async (req: Request, res: Response) => {
  const patients = await prisma.patient.findMany();
  res.json(patients);
};

export const getPatientById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const patient = await prisma.patient.findUnique({ where: { id } });
  if (!patient) return res.status(404).json({ error: 'Paciente no encontrado' });
  res.json(patient);
};

export const createPatient = async (req: Request, res: Response) => {
  const data = req.body;
  const newPatient = await prisma.patient.create({ data });
  res.status(201).json(newPatient);
};

export const updatePatient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const updated = await prisma.patient.update({ where: { id }, data });
  res.json(updated);
};

export const updatePatientStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['ACTIVE', 'INACTIVE', 'DECEASED'].includes(status)) {
    return res.status(400).json({ error: 'Estado inválido' });
  }

  const updated = await prisma.patient.update({
    where: { id },
    data: { status: status as PatientStatus }
  });

  res.json(updated);
};
