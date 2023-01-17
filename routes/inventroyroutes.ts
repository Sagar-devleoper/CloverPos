import express from 'express';
import controllers from '../controllers/get_inventory'
const router = express.Router();

router.get('/getData',controllers.getInventroy)


export = router