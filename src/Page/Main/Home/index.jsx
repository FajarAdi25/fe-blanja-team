// import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../../assets/img/Trends in.png";
import Image2 from "../../../assets/img/Black edition.png";
import Image3 from "../../../assets/img/ian.png";
import Image4 from "../../../assets/img/jas.png";
import Image6 from "../../../assets/img/shoes.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import Card from "../../../Components/Module/Card";
import Navbar from "../../../Components/Module/Navbar";
// import Filter from "../../../Components/Module/Modal/Filter/Filter";
// import Button from "../../../Components/Base/button";

const Home = () => {
  // const [show, setShow] = useState(false);
  // const handleShow = () => {
  //   setShow(true);
  // };
  // const handleClose = () => {
  //   setShow(false);
  // };
  return (
    // <div>
    //   <Button
    //     className=" btn-outline-secondary"
    //     child="Filter"
    //     style={{ borderRadius: "50px" }}
    //     onClick={handleShow}
    //   />
    //   <Filter show={show} onHide={handleClose} />
    // </div>
    <>
      <Navbar />
      <section style={{ paddingTop: 30 }}>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay={true}
          interval={3000}
        >
          <div id="page-home" className="carousel carousel-dark slide mt-5">
            <div className="carousel-inner" style={{ marginLeft: "3%" }}>
              <div
                className="carousel-item active d-flex ml-5"
                data-bs-interval="10000"
                style={{ marginLeft: "5%" }}
              >
                <div style={{ marginRight: "2%", marginTop: "5px" }}>
                  <img src={Image3} className="d-block w-20" alt="..." />
                </div>
                <div
                  style={{
                    marginRight: "2%",
                    textAlign: "center",
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={Image1}
                    className="d-block w-20"
                    alt="..."
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      position: "absolute",
                      color: "white",
                    }}
                  >
                    Trends in 2020
                  </p>
                </div>
                <div
                  style={{
                    marginRight: "2%",
                    textAlign: "center",
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={Image2} className="d-block w-20" alt="..." />
                  <p
                    className="text-center"
                    style={{
                      position: "absolute",
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Black edition
                  </p>
                </div>
                <div style={{ marginRight: "2%", marginTop: "5px" }}>
                  <img src={Image4} className="d-block w-20" alt="..." />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
              style={{ marginLeft: "5%" }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
              style={{ marginRight: "6%" }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Carousel>
      </section>

      <section id="page-home">
        <div className="title-category">
          <h1>Category</h1>
          <p>What are you currently looking for</p>
        </div>
        <div className="category d-flex justify-content-center flex-wrap">
          <div
            className=" d-flex rounded-3 "
            style={{
              marginLeft: "3%",
              borderRadius: "8px",
              backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column  ",
            }}
          >
            <img
              src={Image6}
              alt=""
              style={{ display: "block", maxWidth: "100%" }}
            />
            <p className="title-name">Run Shoes</p>
          </div>
          <div
            className=" d-flex rounded-3 "
            style={{
              marginLeft: "3%",
              borderRadius: "8px",
              backgroundColor: "blue",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column  ",
            }}
          >
            <img
              src={Image6}
              alt=""
              style={{ display: "block", maxWidth: "100%" }}
            />
            <p className="title-name">Shoes</p>
          </div>
          <div
            className=" d-flex rounded-3 "
            style={{
              marginLeft: "3%",
              borderRadius: "8px",
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column  ",
            }}
          >
            <img
              src={Image6}
              alt=""
              style={{ display: "block", maxWidth: "100%" }}
            />
            <p className="title-name">shoes</p>
          </div>
          <div
            className=" d-flex rounded-3 "
            style={{
              marginLeft: "3%",
              borderRadius: "8px",
              backgroundColor: "purple",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column  ",
            }}
          >
            <img
              src={Image6}
              alt=""
              style={{ display: "block", maxWidth: "100%" }}
            />
            <p className="title-name">T-shirt</p>
          </div>
          <div
            className=" d-flex rounded-3 "
            style={{
              marginLeft: "3%",
              borderRadius: "8px",
              backgroundColor: "purple",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column  ",
            }}
          >
            <img
              src={Image6}
              alt=""
              style={{ display: "block", maxWidth: "100%" }}
            />
            <p className="title-name">T-shirt</p>
          </div>
        </div>
      </section>

      <section id="page-home" className="px-5 mx-2">
        <div className="title-new">
          <h1>New</h1>
          <p>You’ve never seen it before!</p>
        </div>
        <div className="d-flex flex-wrap row-gap-4 gap-3">
          <Card />
        </div>
      </section>

      <section id="page-home" className="px-5 mx-2">
        <div className="title-popular">
          <h1>Popular</h1>
          <p>Find clothes that are trending recently</p>
        </div>

        <div className="d-flex flex-wrap row-gap-4 gap-3 mb-5">
          <Card />
        </div>
      </section>
    </>
  );
};

export default Home;
