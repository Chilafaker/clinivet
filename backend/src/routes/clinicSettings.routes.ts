import express from 'express';
import {
  getClinicSettings,
  updateClinicSettings
} from '../controllers/clinicSettings.controller';

const router = express.Router();

router.get('/', getClinicSettings);
router.put('/', updateClinicSettings);

export default router;
