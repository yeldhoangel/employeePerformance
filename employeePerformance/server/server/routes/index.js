import express from 'express';
import auth from './auth';
import admin from './admin';
import employee from './employee';

const router = express.Router();

router.use('/', auth);
router.use('/admin', admin);
router.use('/employee', employee);




export default router;