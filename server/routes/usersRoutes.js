import { Router } from 'express';

import { test } from '../controller/testController.js';
import {newPayment,checkStatus} from '../controller/paymentContaoler.js'
import {generateChecksum,callback} from '../controller/paytmController.js'
const router = Router(); 

router.get('/', test);

router.post('/payment', newPayment);

router.all('/status/:txnId', checkStatus);

// router.get('/getkey', getKey);


//Paytm routes

// router.post('/generateChecksum', generateChecksum)

// router.post('/callback', callback)





export { router };
