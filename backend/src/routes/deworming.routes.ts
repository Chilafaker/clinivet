import express from 'express';
import {
  getDewormingsByPatient,
  createDeworming
} from '../controllers/deworming.controller';

const router = express.Router();

router.get('/:id/dewormings', getDewormingsByPatient);
router.post('/:id/dewormings', createDeworming);

export default router;
