import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllFollowUps = async (req: Request, res: Response) => {
  const followUps = await prisma.followUp.findMany({
    include: { patient: true },
    orderBy: { sendDate: 'asc' }
  });

  res.json(followUps);
};

export const createFollowUp = async (req: Request, res: Response) => {
  const { patientId, type, message, sendDate } = req.body;

  const newFollowUp = await prisma.followUp.create({
    data: {
      patientId,
      type,
      message,
      sendDate: new Date(sendDate),
      status: 'PENDING'
    }
  });

  res.status(201).json(newFollowUp);
};

export const updateFollowUpStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const updated = await prisma.followUp.update({
    where: { id },
    data: { status }
  });

  res.json(updated);
};
