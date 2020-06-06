import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide1 from "../styles/landing_cards/Slide1.png";
import Slide2 from "../styles/landing_cards/Slide2.png";
import Slide3 from "../styles/landing_cards/Slide3.png";
import PS4 from "../styles/landing_cards/PS4.png";
import Gym from "../styles/landing_cards/Gym.png";
import Work from "../styles/landing_cards/Work.png";
import Safety from "../styles/landing_cards/Safety.png";
import Perfume from "../styles/landing_cards/Perfume.png";
import HairCare from "../styles/landing_cards/Hair_Care.png";
import Makeup from "../styles/landing_cards/Makeup.png";
import Luxury from "../styles/landing_cards/Luxury.png";
import Men_Fashion from "../styles/landing_cards/Men Fashion.png";
import Women_Fashion from "../styles/landing_cards/Women Fashion.png";
import Innerwear from "../styles/landing_cards/Innerwear.png";
import Electronics from "../styles/landing_cards/Electronics.png";
import Televisions from "../styles/landing_cards/Televisons.png";
import Summer_Essentials from "../styles/landing_cards/Summer_Essentials.png";
import Appliances from "../styles/landing_cards/Appliances.png";
import Chairs from "../styles/landing_cards/Chairs and Desks.png";
import Apple from "../styles/landing_cards/Apple.png";
import Samsung from "../styles/landing_cards/Samsung.png";
import Mi from "../styles/landing_cards/Mi.png";
import Nokia from "../styles/landing_cards/Nokia.png";
import Vivo from "../styles/landing_cards/Vivo.png";
import Oppo from "../styles/landing_cards/Oppo.png";
import Asus from "../styles/landing_cards/Asus.png";
import HTC from "../styles/landing_cards/HTC.png";
import OnePlus from "../styles/landing_cards/OnePlus.png";
import "../styles/landing.css";
class Landing extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div id="home">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="/login">
                <img src={Slide1} className="d-block w-100" alt="Slide1" />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/login">
                <img src={Slide2} className="d-block w-100" alt="Slide2" />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/login">
                <img src={Slide3} className="d-block w-100" alt="Slide3" />
              </Link>
            </div>
          </div>
          <a
            className="carousel-control-prev "
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="card-deck">
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0" id="style">
                  <div className="card-body">
                    <h5 className="card-title">PS4 | Your Gaming</h5>
                    <img className="card-img-top" src={PS4} alt="PS4" />
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0">
                  <div className="card-body">
                    <h5 className="card-title">Deals Of The Day | Under 400</h5>
                    <div className="row">
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Men_Fashion}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Men's Fashion
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Women_Fashion}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Women's Fashion
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Innerwear}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Innerwear
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Electronics}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Electronics
                          </p>
                        </Link>
                      </div>
                    </div>
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0">
                  <div className="card-body">
                    <h5 className="card-title">Gym Equipments</h5>
                    <img className="card-img-top" src={Gym} alt="PS4" />
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="col-12 mb-5">
                  <div className="card rounded-0">
                    <div className="card-body">
                      <h5 className="card-title">
                        Sign In For Your Best Experience
                      </h5>
                      <Link to="/login" className="btn btn-info w-100">
                        Sign in Securely
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-5">
                  <div className="card rounded-0">
                    <div className="card-body">
                      <h5 className="card-title">Haven't even registered?</h5>
                      <Link to="/register" className="btn btn-info w-100 ">
                        {" "}
                        Register here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0">
                  <div className="card-body">
                    <h5 className="card-title">Luxury In Your Hands</h5>
                    <div className="row">
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Televisions}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Televisions
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Appliances}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Appliances
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Summer_Essentials}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Summer Essentials
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Chairs}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Chairs And Desks
                          </p>
                        </Link>
                      </div>
                    </div>
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0">
                  <div className="card-body">
                    <h5 className="card-title">Work At Home</h5>
                    <img className="card-img-top" src={Work} alt="PS4" />
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0">
                  <div className="card-body">
                    <h5 className="card-title">Beauty Products</h5>
                    <div className="row">
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Perfume}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Perfume
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={HairCare}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Hair Care
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Luxury}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Luxury
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Makeup}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Make
                          </p>
                        </Link>
                      </div>
                    </div>
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0">
                  <div className="card-body">
                    <h5 className="card-title">Safety Equipments</h5>
                    <img className="card-img-top" src={Safety} alt="PS4" />
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-center my-3">
            <div className="card-header text-left">Mobile Phones</div>
            <div className="card-body">
              <div className="container-fluid">
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  containerClass="container-with-dots"
                  draggable
                  focusOnSelect={false}
                  infinite
                  keyBoardControl
                  minimumTouchDrag={80}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  showDots={false}
                  slidesToSlide={1}
                  swipeable
                  sliderClass=""
                  itemClass=""
                  dotListClass=""
                  className=""
                  responsive={responsive}
                >
                  <div>
                    <img src={Apple} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Apple Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 50,000
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={Samsung} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Samsung Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 10,000
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={Mi} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Mi Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 7,000
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={Nokia} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Nokia Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 15,000
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={Vivo} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Vivo Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 6,000
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={Oppo} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Oppo Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 9,000
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={Asus} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Asus Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 7,000
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={HTC} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">HTC Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 25,000
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={OnePlus} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">OnePlus Phones</p>
                      <Link to="/login" className="stretched-link">
                        Starting From 30,000
                      </Link>
                    </div>
                  </div>
                </Carousel>
                <div className="card-footer">
                  <Link to="/login"> Show all Phones>></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
