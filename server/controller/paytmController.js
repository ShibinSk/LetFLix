
import crypto from 'crypto'






export const generateChecksum=async (req,res)=>{
    try {
        const paytmParams = {
            MID: 'pKpQnb96576360045957',
            ORDER_ID: '04335355355',
            CUST_ID: 'customer_id',
            TXN_AMOUNT: '100',
            CHANNEL_ID: 'WEB',
            INDUSTRY_TYPE_ID: 'Retail',
            WEBSITE: 'DEFAULT', // For testing, use 'WEBSTAGING'; for production, use 'DEFAULT'
            CALLBACK_URL: 'http://localhost:8080/callback',
          };
        
          // Add your Paytm Merchant Key here
          const merchantKey = 'your_merchant_key';
        
          // Generate checksum
          const checksum = generateChecksumKey(paytmParams, merchantKey);
        
          // Add the checksum to the paytmParams
          paytmParams.CHECKSUMHASH = checksum;
        
          res.sendStandardResponse("OK", {
            data: paytmParams,
            message: "checkOut success",
          });
        //   res.json(paytmParams);
    } catch (error) {
        console.log(error);
    }

}


function generateChecksumKey(params, key) {
    const paramString = Object.keys(params)
      .map(param => `${param}=${params[param]}`)
      .join('&');
    
    const encrypt = crypto.createHmac('sha256', key);
    encrypt.update(paramString);
  
    return encrypt.digest('hex');
  }
  

  export const callback=(req,res)=>{
    try {
        const responseData = req.body;

  // Verify the checksum received from Paytm
  const isValidChecksum = verifyChecksum(responseData, 'your_merchant_key');

  if (isValidChecksum) {
    // Check if the transaction was successful
    if (responseData.STATUS === 'TXN_SUCCESS') {
      // Handle successful payment
      console.log('Payment successful:', responseData);
      res.send('Payment successful');
    } else {
      // Handle failed payment
      console.log('Payment failed:', responseData);
      res.send('Payment failed');
    }
  } else {
    // Handle invalid checksum
    console.log('Invalid checksum. Possible tampering.');
    res.status(400).send('Invalid checksum');
  }
        
    } catch (error) {
        console.log(error);
    }

  }

  function verifyChecksum(responseData, key) {
    const checksumHash = responseData.CHECKSUMHASH;
    delete responseData.CHECKSUMHASH;
  
    const paramString = Object.keys(responseData)
      .sort()
      .map(param => `${param}=${responseData[param]}`)
      .join('&');
  
    const encrypt = crypto.createHmac('sha256', key);
    encrypt.update(paramString);
  
    const calculatedChecksum = encrypt.digest('hex');
  
    return calculatedChecksum === checksumHash;
  }
  