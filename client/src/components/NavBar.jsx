import { Link } from "react-router-dom";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
} from "@mui/material";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bar">
        <div className="container">
          <nav className="navbar navbar-light navbar-expand-lg py-4">
            <Grid className="navbar-brand" item xs={4} sm={4} md={12}>
              <Link to={"/"}>
                <img
                  style={{
                    width: "90%", // Set width to 100% for responsiveness
                    height: "auto", // Maintain aspect ratio
                    maxWidth: "35vh", // Set maximum width if needed
                    maxHeight: "18vh", // Set maximum height if needed
                    paddingLeft: "30px",
                  }}
                  src="/ezgif.com-crop (2).gif"
                  alt="Loding.."
                />
              </Link>
            </Grid>

            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <Grid
                  container
                  spacing={0}
                  justify="center"
                  sx={{ color: "black" }}
                >
                  <Grid item xs={12} sm={6} md={4}>
                    <BottomNavigation
                      showLabels
                      value={0}
                      className="nav-item nav-link active"
                    >
                      <BottomNavigationAction
                        style={{ color: "rgba(0,0,0,.55", fontWeight: "200" }}
                        label="Home"
                        component={Link}
                        to="/"
                      />
                    </BottomNavigation>
                  </Grid>
                  {/* <Grid item xs={12} sm={6} md={2}>
                    <BottomNavigation
                      showLabels
                      value={0}
                      className="nav-item nav-link active"
                    >
                      <BottomNavigationAction
                        style={{ color: "rgba(0,0,0,.55",fontWeight:'200'  }}
                        label="About"
                        component={Link}
                        to="/about"
                      />
                    </BottomNavigation>
                  </Grid> */}
                  <Grid item xs={12} sm={6} md={2}>
                    <BottomNavigation
                      showLabels
                      value={0}
                      className="nav-item nav-link active"
                    >
                      <BottomNavigationAction
                        style={{ color: "rgba(0,0,0,.55", fontWeight: "200" }}
                        label="Gallery"
                        component={Link}
                        to="/chooseEvent"
                      />
                    </BottomNavigation>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <BottomNavigation
                      showLabels
                      value={0}
                      className="nav-item nav-link active"
                    >
                      <BottomNavigationAction
                        style={{ color: "rgba(0,0,0,.55", fontWeight: "200" }}
                        label="Refund Policy"
                        component={Link}
                        to="/RefundPolicy"
                      />
                    </BottomNavigation>
                  </Grid>
                  <Grid item xs={12} sm={6} md={2}>
                    <BottomNavigation
                      showLabels
                      value={0}
                      className="nav-item nav-link active"
                    >
                      <BottomNavigationAction
                        style={{ color: "rgba(0,0,0,.55", fontWeight: "200" }}
                        label="Terms & Conditions"
                        component={Link}
                        to="/privacypolicy"
                      />
                    </BottomNavigation>
                  </Grid>
                  {/* <Grid item xs={12} sm={6} md={2}>
                    <BottomNavigation
                      showLabels
                      value={0}
                      className="nav-item nav-link active"
                    >
                      <BottomNavigationAction
                        style={{ color: "rgba(0,0,0,.55",fontWeight:'200'  }}
                        label="Contact"
                        component={Link}
                        to="/contact"
                      />
                    </BottomNavigation>
                  </Grid> */}
                  {/* <Grid item xs={12} sm={6} md={1}>
                    <BottomNavigation
                      showLabels
                      value={0}
                      className="nav-item nav-link active"
                    >
                      <BottomNavigationAction
                        style={{ color: "rgba(0,0,0,.55" ,fontWeight:'200' }}
                        label="Faq"
                        component={Link}
                        to="/faq"
                      />
                    </BottomNavigation>
                  </Grid> */}
                </Grid>
                {/* </Paper> */}

                {/* <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Gallery
                </a>
                <a href="event.html" className="nav-item nav-link">
                  Faq
                </a>
                <a href="menu.html" className="nav-item nav-link">
                  Refund Policy
                </a> */}
                {/* <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu bg-light">
                  <a href="book.html" className="dropdown-item">Booking</a>
                  <a href="blog.html" className="dropdown-item">Our Blog</a>
                  <a href="team.html" className="dropdown-item">Our Team</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="404.html" className="dropdown-item">404 Page</a>
                </div>
              </div> */}
                {/* <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a> */}
              </div>
              {/* <button
                className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search"></i>
              </button> */}
              {/* <a
                href="/chooseEvent"
                className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft"
              >
                Book Now
              </a> */}
              <Link to={'/chooseEvent'}>

              <button className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">
                Book Now
              </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
