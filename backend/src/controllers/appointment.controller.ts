import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments = await prisma.appointment.findMany({
    include: {
      patient: true,
      user: true
    },
    orderBy: { date: 'asc' }
  });

  res.json(appointments);
};

export const createAppointment = async (req: Request, res: Response) => {
  const { date, service, patientId, userId, notes } = req.body;

  const newAppointment = await prisma.appointment.create({
    data: {
      date: new Date(date),
      service,
      patientId,
      userId,
      notes
    }
  });

  res.status(201).json(newAppointment);
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const appointment = await prisma.appointment.findUnique({
    where: { id },
    include: { patient: true, user: true }
  });

  if (!appointment) {
    return res.status(404).json({ error: 'Cita no encontrada' });
  }

  res.json(appointment);
};

export const updateAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { date, service, patientId, userId, notes } = req.body;

  const updated = await prisma.appointment.update({
    where: { id },
    data: {
      date: new Date(date),
      service,
      patientId,
      userId,
      notes
    }
  });

  res.json(updated);
};

export const updateAppointmentStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['PENDING', 'COMPLETED', 'CANCELLED'].includes(status)) {
    return res.status(400).json({ error: 'Estado inválido' });
  }

  const updated = await prisma.appointment.update({
    where: { id },
    data: { status }
  });

  res.json(updated);
};
