import express from 'express';
import {
  getAllFollowUps,
  createFollowUp,
  updateFollowUpStatus
} from '../controllers/followup.controller';

const router = express.Router();

router.get('/', getAllFollowUps);
router.post('/', createFollowUp);
router.patch('/:id/status', updateFollowUpStatus);

export default router;
