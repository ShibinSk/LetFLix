import { Container, Grid } from "@mui/material";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";

const Privacypolicy = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Grid
          display={"flex"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <h1>Terms & Conditions</h1>
        </Grid>

        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img
              src="/1.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/2.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/3.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Privacypolicy;
