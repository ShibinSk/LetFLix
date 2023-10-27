import Navbar from "../../../components/NavBar";
import { ArrowBack } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GavelIcon from "@mui/icons-material/Gavel";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PersonIcon from "@mui/icons-material/Person";
import {
  Autocomplete,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  InputBase,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import React, { ChangeEvent, useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const BookingDetails = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [auctions, setAuctions] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [lot, setLot] = useState({
    lotNo: null,
    lotWt: null,
    basePrice: null,
    packingCharge: null,
    expectedPrice: null,
    color: "",
    type: "",
    attachments: {},
    grade: {
      mm8: {
        clean: null,
        sick: null,
        split: null,
      },
      mm7_8: {
        clean: null,
        sick: null,
        split: null,
      },
    },

    quality: {
      green: null,
      average: null,
      fruit: null,
      belowAverage: null,
    },

    quantity: {
      ltrWt: null,
      moisture: null,
      bagsNo: null,
      netWt: null,
    },
    seller: {
      name: "",
      status: 100,
      createdAt: dayjs(),
      updatedAt: dayjs(),
      kind: "seller",
      _id: "",
    },
    auction: {
      auctionNo: -1,
      _id: "",
      createdAt: dayjs(),
      updatedAt: dayjs(),
      status: 201,
      weight: 0,
      maxNoOfLots: 0,
      lots: [],
    },
    purchase: {},
    // status: LotLifeCycleStates.SCHEDULED,
  });
  const [warning, setWarning] = useState("");
  const [value, setValue] = React.useState("1");
  return (
    <div>
      <Navbar />
      <Container>
        {/* <h2 style={{ textAlign: 'center' }}>Add New Lot</h2> */}
        <br />
        <Box sx={{ width: "100%", typography: "body1" }}>
          <Container maxWidth="sm">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4">Standard Theatre</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  <CalendarMonthIcon /> Date: 14/12/2023
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  <AccessTimeIcon /> Time: 10:00 PM - 1:00 AM
                </Typography>
              </Grid>
            </Grid>

            {/* <Stepper activeStep={activeStep}>
              <Step>
                <StepLabel>Basic</StepLabel>
              </Step>
              <Step>
                <StepLabel>Quality</StepLabel>
              </Step>
            </Stepper> */}
          </Container>
          <br />
          {activeStep == 0 && (
            <form
              onSubmit={(e) => {
                // e.preventDefault();
                // if (!lot.attachments.pic) {
                //   setWarning('Image is missing');
                //   setOpen(true);
                // } else if (!lot.attachments.video) {
                //   setWarning('Video is missing');
                //   setOpen(true);
                // } else {
                //   setActiveStep(1);
                // }
              }}
            >
              <Grid container spacing={2}>
                {/* <Grid item xs={12}>
                  <Autocomplete
                    options={auctions ?? []}
                    value={lot.auction ?? null}
                    onChange={(e, newValue) =>
                      newValue &&
                      setLot({
                        ...lot,
                        auction: newValue,
                      })
                    }
                    // getOptionLabel={(auction) =>
                    //   auction._id == ''
                    //     ? ''
                    //     : 'Auction ' + auction.auctionNo.toString() + (auction.date ? ' (' + auction.date?.format('DD/MM/YYYY hh:mm A') + ')' : '')
                    // }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Auction"
                        required
                        variant="standard"
                        sx={{
                          background: '#f4f5f4',
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    )}
                  />
                </Grid> */}

                {/* <Grid item xs={12}>
                  <Autocomplete
                    options={users ?? []}
                    // value={lot.seller ?? null}
                    // onChange={(e, newValue) => newValue && setLot((req) => ({ ...req, seller: newValue }))}
                    getOptionLabel={(user) => user.name}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Seller"
                        variant="standard"
                        required
                        sx={{
                          background: '#f4f5f4',
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    )}
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <InputBase
                    type="text"
                    value={lot.color}
                    onChange={(e) =>
                      setLot({
                        ...lot,
                        color: e.target.value,
                      })
                    }
                    placeholder="Name"
                    sx={{
                      background: "#f4f5f4",
                      borderRadius: 50,
                      padding: 2,
                    }}
                    disabled={loading}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputBase
                    type="Number"
                    value={lot.color}
                    onChange={(e) =>
                      setLot({
                        ...lot,
                        color: e.target.value,
                      })
                    }
                    placeholder="Phone Number"
                    sx={{
                      background: "#f4f5f4",
                      borderRadius: 50,
                      padding: 2,
                    }}
                    disabled={loading}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputBase
                    type="Email"
                    value={lot.color}
                    onChange={(e) =>
                      setLot({
                        ...lot,
                        color: e.target.value,
                      })
                    }
                    placeholder="Email"
                    sx={{
                      background: "#f4f5f4",
                      borderRadius: 50,
                      padding: 2,
                    }}
                    disabled={loading}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    options={availableSlots ?? []}
                    value={lot.lotNo ?? null}
                    getOptionLabel={(_lot) =>
                      lot.lotNo == -1 ? "" : "Lot #" + _lot
                    }
                    onChange={(e, newValue) =>
                      newValue &&
                      setLot({
                        ...lot,
                        lotNo: newValue,
                      })
                    }
                    // getOptionLabel={(auction) => 'Auction ' + auction.auctionNo.toString()}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Number Of People"
                        required
                        variant="standard"
                        sx={{
                          background: "#f4f5f4",
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    options={availableSlots ?? []}
                    value={lot.lotNo ?? null}
                    getOptionLabel={(_lot) =>
                      lot.lotNo == -1 ? "" : "Lot #" + _lot
                    }
                    onChange={(e, newValue) =>
                      newValue &&
                      setLot({
                        ...lot,
                        lotNo: newValue,
                      })
                    }
                    // getOptionLabel={(auction) => 'Auction ' + auction.auctionNo.toString()}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Do You Want DecorationNo"
                        required
                        variant="standard"
                        sx={{
                          background: "#f4f5f4",
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    )}
                  />
                </Grid>
                <br />
                <br />

                <Grid
                  container
                  spacing={2}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h4">Total Cost: 1599</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      (All taxes included)
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Link to={"/login"}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 5,
                        borderRadius: 50,
                        padding: 2,
                        marginRight: 2,
                      }}
                      fullWidth
                    >
                      Next
                    </Button>
                  </Link>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
            </form>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default BookingDetails;
