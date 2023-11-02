import { Router } from 'express';

import { test } from '../controller/testController.js';
import {checkout,verify,getKey} from '../controller/paymentContaoler.js'
const router = Router(); 

router.get('/', test);

router.post('/checkOut', checkout);

router.post('/verifypayment', verify);

router.get('/getkey', getKey);

export { router };
