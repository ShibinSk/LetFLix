import crypto from "crypto";
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();


const salt_key = process.env.SALT_KEY;
const merchant_id = process.env.MUID;


export const newPayment = async (req, res) => {
  try {
    console.log(req.body);
    const merchantTransactionId = req.body.transactionId;
    const data = {
      merchantId: merchant_id,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: req.body.MUID,
      name: req.body.name,
      amount: req.body.amount * 100,
      redirectUrl: `http://13.234.228.135:8080/status/${merchantTransactionId}`,
      redirectMode: "POST",
      mobileNumber: req.body.number,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + salt_key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";
    const options = {
      method: "POST",
      url: prod_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "data");
        res.redirect(response.data.data.instrumentResponse.redirectInfo.url);   
    // res.sendStandardResponse("OK", {
    //   data: response.data,
    //   message: "checkOut success",
    // });
        // return res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
      }
      )
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
};

export const checkStatus = async (req, res) => {
  const merchantTransactionId = res.req.body.transactionId;
  const merchantId = res.req.body.merchantId;

  const keyIndex = 1;
  const string =
    `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const options = {
    method: "GET",
    url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  // CHECK PAYMENT TATUS
  axios
    .request(options)
    .then(async (response) => {
      if (
        req.body.code == "PAYMENT_SUCCESS" &&
        req.body.merchantId &&
        req.body.transactionId &&
        req.body.providerReferenceId
      ) {
        if (req.body.transactionId) {
          if (response.data.success === true) {
            console.log(response);
            const url = `http://localhost:5173/success`;
            return res.redirect(url);
          } else {
            const url = `http://localhost:5173/failure`;
            return res.redirect(url);
          }
        } else {
          const url = `http://localhost:5173/failure`;
          return res.redirect(url);
        }
      } else {
        const url = `http://localhost:5173/failure`;
        return res.redirect(url);
      }
    })
    .catch((error) => {
      console.error(error);
    });

    
     
    
};


