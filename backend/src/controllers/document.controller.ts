import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDocumentsByPatient = async (req: Request, res: Response) => {
  const { id } = req.params;

  const documents = await prisma.document.findMany({
    where: { patientId: id },
    orderBy: { uploadedAt: 'desc' }
  });

  res.json(documents);
};

export const createDocument = async (req: Request, res: Response) => {
  const { id: patientId } = req.params;
  const { url, type } = req.body;

  if (!url || !type) {
    return res.status(400).json({ error: 'URL y tipo de documento son obligatorios' });
  }

  const newDoc = await prisma.document.create({
    data: { patientId, url, type }
  });

  res.status(201).json(newDoc);
};
