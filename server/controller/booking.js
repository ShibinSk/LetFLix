

export const Booking = async (req, res) => {
  try {
    console.log(req.body);
    console.log("TEST MODE");
    // console.log(req.body);
    
    res.sendStandardResponse("OK", {
      data: "ds",
      message: "checkOut success",
    });
  } catch (err) {
    console.log(err);
  }

};
