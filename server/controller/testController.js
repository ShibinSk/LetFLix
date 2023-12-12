// import { extendResponse } from '../middlewares/standardResponse.js';

export const test = async (req, res) => {
  try {
    console.log("TEST MODE");
    res.sendStandardResponse('OK', {
      data: "DATA",
      message: 'eeeeeeeeeeeeeeeeee',
    });
  } catch (err) {
    console.log(err);
  }
};