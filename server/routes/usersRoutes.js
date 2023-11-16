import { Router } from 'express';

import { test } from '../controller/testController.js';
import {checkout,verify,getKey} from '../controller/paymentContaoler.js'
import {generateChecksum,callback} from '../controller/paytmController.js'
const router = Router(); 

router.get('/', test);

router.post('/checkOut', checkout);

router.post('/verifypayment', verify);

router.get('/getkey', getKey);


//Paytm routes

router.post('/generateChecksum', generateChecksum)

router.post('/callback', callback)





export { router };
