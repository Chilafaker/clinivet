import express from 'express';
import {
  getVaccinesByPatient,
  createVaccine
} from '../controllers/vaccine.controller';

const router = express.Router();

router.get('/:id/vaccines', getVaccinesByPatient);
router.post('/:id/vaccines', createVaccine);

export default router;
