import { Router } from 'express';

import { test } from '../controller/testController.js';
const router = Router(); 

router.get('/', test);

export { router };
