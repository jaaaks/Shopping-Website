import React, { Component } from "react";
import { Link } from "react-router-dom";
//npm library for making multi item carousel easily
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//importing single item carousel images
import Slide1 from "../styles/landing_page/Carousel/Slide1.png";
import Slide2 from "../styles/landing_page/Carousel/Slide2.png";
import Slide3 from "../styles/landing_page/Carousel/Slide3.png";
//importing images for various categories
import PS4 from "../styles/landing_page/PS4.png";
import Gym from "../styles/landing_page/Gym.png";
import Work from "../styles/landing_page/Work.png";
import Safety from "../styles/landing_page/Safety.png";
import Perfume from "../styles/landing_page/Perfume.png";
import HairCare from "../styles/landing_page/Hair_Care.png";
import Makeup from "../styles/landing_page/Makeup.png";
import Luxury from "../styles/landing_page/Luxury.png";
import Men_Fashion from "../styles/landing_page/Men Fashion.png";
import Women_Fashion from "../styles/landing_page/Women Fashion.png";
import Innerwear from "../styles/landing_page/Innerwear.png";
import Electronics from "../styles/landing_page/Electronics.png";
import Televisions from "../styles/landing_page/Televisons.png";
import Summer_Essentials from "../styles/landing_page/Summer_Essentials.png";
import Appliances from "../styles/landing_page/Appliances.png";
import Chairs from "../styles/landing_page/Chairs and Desks.png";
import Laptop from "../styles/landing_page/Laptop.png";
import Badminton from "../styles/landing_page/Badminton.png";
import Cricket from "../styles/landing_page/Cricket.png";
import Football from "../styles/landing_page/Football.png";
import Swimming from "../styles/landing_page/Swimming.png";
import GasStoves from "../styles/landing_page/GasStoves.png";
import KitchenStorage from "../styles/landing_page/KitchenStorage.jpg";
import Cookware from "../styles/landing_page/Cookware.png";
import TableWare from "../styles/landing_page/TableWare.png";
import Speakers from "../styles/landing_page/Speakers.png";
import Tablets from "../styles/landing_page/Tablets.png";
import GamingMonitors from "../styles/landing_page/GamingMonitors.png";
import MusicalInstruments from "../styles/landing_page/MusicalInstruments.png";
import Luggage from "../styles/landing_page/Luggage.png";
import Cars from "../styles/landing_page/Cars.png";
import SportsBikes from "../styles/landing_page/SportsBikes.png";
import EconomicBikes from "../styles/landing_page/EconomicBikes.png";
import GearCycles from "../styles/landing_page/GearCycles.png";
import WomenCycle from "../styles/landing_page/WomenCycle.png";
import TopBooks from "../styles/landing_page/TopBooks.png";
//importing the multi item carousel images
import Apple from "../styles/landing_page/MultiCarousel/Apple.png";
import Samsung from "../styles/landing_page/MultiCarousel/Samsung.png";
import Mi from "../styles/landing_page/MultiCarousel/Mi.png";
import Nokia from "../styles/landing_page/MultiCarousel/Nokia.png";
import Vivo from "../styles/landing_page/MultiCarousel/Vivo.png";
import Oppo from "../styles/landing_page/MultiCarousel/Oppo.png";
import Asus from "../styles/landing_page/MultiCarousel/Asus.png";
import HTC from "../styles/landing_page/MultiCarousel/HTC.png";
import OnePlus from "../styles/landing_page/MultiCarousel/OnePlus.png";
//importing the landing page css
import "../styles/css/landing.css";
class Landing extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        //for determining no of items in each view
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
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0">
                  <div className="card-body">
                    <h5 className="card-title">Live Your Sport</h5>
                    <div className="row">
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Cricket}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Cricket
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Football}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Football
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Badminton}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Badminton
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Swimming}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Swimming
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
                    <h5 className="card-title">Dining And Cookware</h5>
                    <div className="row">
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={KitchenStorage}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Kitchen Storage
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={GasStoves}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Gas Stoves
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={TableWare}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Tableware
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Cookware}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Cookware
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
                <div className="card rounded-0" id="style">
                  <div className="card-body">
                    <h5 className="card-title">Laptops From Top Brands</h5>
                    <img className="card-img-top" src={Laptop} alt="PS4" />
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
                    <h5 className="card-title">Entertainment At Work</h5>
                    <div className="row">
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Speakers}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Speakers
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={Tablets}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Tablets
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={GamingMonitors}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Gaming Monitors
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={MusicalInstruments}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Musical Instruments
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
                <div className="card rounded-0" id="style">
                  <div className="card-body">
                    <h5 className="card-title">Bags & Luggage</h5>
                    <img className="card-img-top" src={Luggage} alt="PS4" />
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3">
                <div className="card rounded-0" id="style">
                  <div className="card-body">
                    <h5 className="card-title">Cars</h5>
                    <img className="card-img-top" src={Cars} alt="PS4" />
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
                    <h5 className="card-title">Bikes & Cycles</h5>
                    <div className="row">
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={SportsBikes}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Sports Bikes
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-2 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={EconomicBikes}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Economic Bikes
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={GearCycles}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Gear Cycles
                          </p>
                        </Link>
                      </div>
                      <div className="col-6 mt-3 mb-2">
                        <Link to="/login">
                          <img
                            className="card-img-top"
                            src={WomenCycle}
                            alt="PS4"
                          />
                          <p className="card-text" id="card-font">
                            Cycle For Women
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
                <div className="card rounded-0" id="style">
                  <div className="card-body">
                    <h5 className="card-title">Top Book Choices For You</h5>
                    <img className="card-img-top" src={TopBooks} alt="PS4" />
                    <Link to="/login" className="card-link">
                      {" "}
                      See More >>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card text-center mt-3">
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
                    <img src={Apple} className="card-img-top" alt="..." />
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
