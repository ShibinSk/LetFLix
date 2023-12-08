import Carousels from "../../../components/Carousel";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/NavBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousels />
      <div className="container-fluid bg-light py-6 my-6 mt-0">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7 col-md-12">
              {/* <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">
                Welcome toletzFlix
              </small> */}
              {/* <h1 className="display-1 mb-4 animated bounceInDown">
                Book <span className="text-primary">Theaters</span> For Your
                Dream Event
              </h1> */}
              <h1 className="display-1 mb-4 animated bounceInDown">
                <span className="text-primary">Curating Surprises,</span>
                <br />
                Your Story,
                <br />
                 Our Screen
              </h1>
              <a
                href="/chooseTheater"
                className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft"
              >
                Book Now
              </a>
              <a
                href="/gallery"
                className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft"
              >
                Gallery
              </a>
            </div>
            <div className="col-lg-5 col-md-12">
              <img
                src="/img2.JPG"
                className="img-fluid rounded animated zoomIn"
                style={{ height: "auto", width: "50vh" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <br />
        {/* <div className="container-fluid py-6">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                <img
                  style={{ height: "auto", width: "50vh" }}
                  src="/img3.JPG"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <br />
              <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                  About Us
                </small>
                <h1 className="display-5 mb-4">
                  Trusted By 200 + satisfied clients
                </h1>
                <p className="mb-4">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore.
                </p>
                <div className="row g-4 text-dark mb-5">
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2"></i>
                    Fresh and Fast food Delivery
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2"></i>
                    24/7 Customer Support
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2"></i>
                    Easy Customization Options
                  </div>
                  <div className="col-sm-6">
                    <i className="fas fa-share text-primary me-2"></i>
                    Delicious Deals for Delicious Meals
                  </div>
                </div>
                <a href="" className="btn btn-primary py-3 px-5 rounded-pill">
                  About Us<i className="fas fa-arrow-right ps-2"></i>
                </a>
              </div>
            </div>
            <br />
          </div>
        </div> */}

       

       
      </div>
      <Footer />
    </>
  );
};
export default Home;
