import Razorpay from "razorpay";
import crypto from 'crypto';

const instance = new Razorpay({
  key_id: "rzp_test_RF0nTXmxHqKSxA",
  key_secret: "r7g6b2ScrJedg3CddhpF3v9x",
});
export const checkout = async (req, res) => {
  try {
    console.log(req.body);
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.sendStandardResponse("OK", {
      data: { success: true, order },
      message: "checkOut success",
    });
  } catch (err) {
    console.log(err);
  }
};

export const verify = async (req, res) => {
  try {
   
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
    const body =razorpay_order_id + "|" + razorpay_payment_id;
    const expectedsgnature =crypto.createHmac('sha256',process.env.key_secret).update(body.toString()).digest('hex')
    const isauth = expectedsgnature ===razorpay_signature;

    if(isauth){
        await Payment.create({
            razorpay_order_id,razorpay_payment_id,razorpay_signature 
        })
        res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)

    }else{

        res.sendStandardResponse("OK", {
          data: {success:false},
          message: "Collection point analysis",
        });
    }

  } catch (err) {
    console.log(err);
  }
};

export const getKey =async (req,res)=>{
    try {
        return res.sendStandardResponse("OK", {
            data: {key:process.env.key_secret},
            message: "Key gat",
          });
        
    } catch (error) {
        
    }

}
