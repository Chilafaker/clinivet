import express from 'express';
import {
  getSalesSummary,
  getTopProducts,
  getTopServices,
  getAppointmentStatus,
  getActivePatientsCount
} from '../controllers/report.controller';

const router = express.Router();

router.get('/sales/summary', getSalesSummary);
router.get('/top/products', getTopProducts);
router.get('/top/services', getTopServices);
router.get('/appointments/status', getAppointmentStatus);
router.get('/patients/active', getActivePatientsCount);

export default router;
