import {
  Typography,
  InputBase,
  Box,
  Card,
  Button,
  Grid,
  IconButton,
  Avatar,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowBack as ArrowBackIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import Lottie from "react-lottie";
import { useState } from "react";
import enterOtp from "../../../assets/animation/116524-enter-password.json";

const Login = () => {
  const [OTP, setOTP] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const otp = {
    loop: true,
    autoplay: true,
    animationData: enterOtp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#FFFCF8",
      }}
    >
      <Card
        sx={{
          background: "white",
          width: "80%",
          height: "70%",
          borderRadius: 4,
          overflow: "scroll",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // AuthServices.getOTP({ phone })
            //   .then((res) => {
            //     setGetOTPResponse(res.data);
            //   })
            //   .catch((error) => {
            //     console.log('error', error);
            //   });
          }}
        >
          <Link to={'/'}>
          <Button
            sx={{ mt: 2 }}
            onClick={() => {
              setStep(0);
            }}
          >
            
            <ArrowBackIcon />
          </Button>
          </Link>

          <Lottie options={otp} height={150} width={150} />
          <Typography
            variant="h5"
            sx={{
              color: "black",
              textAlign: "center",
            }}
          >
            Enter OTP
          </Typography>
          <br />
          {error && (
            <Typography sx={{ color: "red", ml: 3, textAlign: "left" }}>
              {error}
            </Typography>
          )}

          <Box sx={{ ml: 8, mr: 8, mt: 2 }}>
            <InputBase
              type="number"
              // value={OTP}
              // onChange={(e) => {
              //   setOTP(e.target.value);
              //   if (e.target.value.length === 4) {
              //     // Verify OTP!
              //     setLoading(true);
              //     AuthServices.verifyOTP({
              //       auth_process_id: getOTPResponse?.auth_process_id as string,
              //       OTP: e.target.value,
              //     })
              //       .then((res) => {
              //         setLoading(false);
              //         console.log(res);
              //         if (res.data.isExistingUser) {
              //           // handle that case
              //           localStorage.setItem('authUser', JSON.stringify(res.data.user));
              //           localStorage.setItem('userToken', res.data.authToken as string);
              //           auth.setUser(res.data.user as IUser);
              //           navigate('/');
              //         } else {
              //           setCreateUserRequest((req) => ({
              //             ...req,
              //             tempAuthToken: res.data.tempAuthToken as string,
              //           }));
              //           setStep(2);
              //         }
              //       })
              //       .catch((error) => {
              //         setLoading(false);
              //         console.log(error);
              //         setError(error.message);
              //       });
              //   }
              // }}
              placeholder="XXXX"
              sx={{
                background: "#f4f5f4",
                borderRadius: 50,
                padding: 1,
                paddingLeft: 4,
                latterSpacing: 10,
                textAlign: "center",
                fontWeight: "bold",
              }}
              inputProps={{
                maxLength: 4,
                style: { letterSpacing: 40, textAlign: "center" },
              }}
              disabled={loading}
              fullWidth
            />
          </Box>
          <div style={{ textAlign: "center", marginRight: 5 }}>
            <br />
            <br />
            Didn't receive ?
            <Button
              type="submit"
              sx={{ color: "#384971" }}
              // onClick={() => {
              //   setOTP('');
              // }}
            >
              Resend OTP
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
