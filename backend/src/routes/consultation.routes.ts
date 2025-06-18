import express from 'express';
import {
  getConsultationsByPatient,
  createConsultation
} from '../controllers/consultation.controller';

const router = express.Router();

router.get('/:id/consultations', getConsultationsByPatient);
router.post('/:id/consultations', createConsultation);

export default router;
