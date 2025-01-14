import React, { useState } from "react";
import "./css/Home.css";
import "./css/Custom.css";
import "./css/homemobile.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Homebar from "./component/Homebar";

function Home() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const bask = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: "1",
        amount: data.amount,
        name: data,
      },
    });
  };

  const [data, setData] = useState({});

  const { amount } = data;
  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="home">
      <Homebar />
      <div className="sections">
        {/* <form onSubmit={submit}> */}
        <div className="section__logo">
          <img
            src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/Logo_mtkbiv.png"
            alt="website logo"
          ></img>
        </div>
        <div className="section1">
          <div className="section1__title">
            <h2>Donate to a Cause You Care About</h2>
          </div>

          <div className="section1__list mb-40">
            <div className="section1__list1">
              <input
                type="radio"
                name="donationfor"
                className="section1__radio"
                id="orphan-sponsorship"
                value="orphan-sponsorship"
                onChange={onChange}
                required
              />
              <label className="section1__label" htmlFor="orphan-sponsorship">
                <img
                  src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/lovehands_h9qrlr.png"
                  className="width-45 width-65"
                  alt="love hands"
                />
                <p className="cause-title">
                  Orphan <br></br>Sponsorship
                </p>{" "}
              </label>
            </div>
            <div className="section1__list1 mr-0">
              <input
                type="radio"
                name="donationfor"
                className="section1__radio"
                id="Refuges-reliefs"
                value="Refuges-reliefs"
                onChange={onChange}
              />
              <label className="section1__label" htmlFor="Refuges-reliefs">
                <img
                  src="https://res.cloudinary.com/benferanmi/image/upload/v1657050137/donate/walking_xqsujm.jpg"
                  className="width-45"
                  alt="love hands"
                />
                <p className="cause-title pt-10">
                  Refuges <br></br> Reliefs
                </p>{" "}
              </label>
            </div>
          </div>
          <div className="section1__list">
            <div className="section1__list1">
              <input
                type="radio"
                name="donationfor"
                className="section1__radio"
                id="Water wells"
                value="Water wells"
                onChange={onChange}
              />
              <label className="section1__label" htmlFor="Water wells">
                <img
                  src="https://res.cloudinary.com/benferanmi/image/upload/v1657050147/donate/water_awomkc.jpg"
                  className="width-45"
                  alt="love hands"
                />
                <p className="cause-title pt-10">
                  Water <br></br> Wells
                </p>{" "}
              </label>
            </div>

            <div className="section1__list1 zakat mr-0">
              <input
                type="radio"
                name="donationfor"
                className="section1__radio"
                id="Zakat"
                value="Zakat"
                onChange={onChange}
              />
              <label className="section1__label" htmlFor="Zakat">
                <img
                  src="https://res.cloudinary.com/benferanmi/image/upload/v1657050142/donate/lovehand_e8bp1g.jpg"
                  className="width-45"
                  alt="love hands"
                />
                <p className="cause-title pt-10">Zakat</p>{" "}
              </label>
            </div>
          </div>
          <div className="section1__subtext">
            <p>
              “…and those in whose wealth there is a recognised right, for the
              needy and deprived” (Al-Ma’arij 70:24-25)
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="section2__title mt-30 ">
            <h2>Giving Options</h2>
          </div>

          <div className="section2__fill">
            <div className="section2__list mr-20">
              <input
                type="radio"
                name="givingoptions"
                id="one time giving"
                value="one time giving"
                onChange={onChange}
                required
              />
              <label htmlFor="one time giving">
                <p className="cause-title">One time giving</p>
              </label>
            </div>
            <div className="section2__list mr-0">
              <input
                type="radio"
                name="givingoptions"
                id="Monthly Giving"
                value="Monthly Giving"
                onChange={onChange}
              />
              <label htmlFor="Monthly Giving">
                <p className="cause-title">Monthly Giving</p>
              </label>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="section3__title mt-20 ">
            <h2>I would like to give:</h2>
          </div>

          <div className="section3__fill">
            <div className="section3__list">
              <input
                type="radio"
                name="amount"
                id="100"
                value="100"
                onChange={onChange}
                required
              />
              <label htmlFor="100">
                <p className="cause-title ml-20">$100</p>
              </label>
            </div>
            <div className="section3__list">
              <input
                className="radio"
                type="radio"
                name="amount"
                id="50"
                value="50"
                onChange={onChange}
              />
              <label htmlFor="50">
                <p className="cause-title ml-20">$50</p>
              </label>
            </div>
            <div className="section3__list">
              <input
                type="radio"
                name="amount"
                id="25"
                value={25}
                onChange={onChange}
              />
              <label htmlFor="25">
                <p className="cause-title ml-20">$25</p>
              </label>
            </div>
            <div className="section3__list mr-0 typeoftext">
              <input
                type="text"
                name="amount"
                placeholder="custom"
                id="custom"
                value={amount}
                onChange={onChange}
              />
            </div>
          </div>

          <div id="nonSelected"></div>
        </div>
        <div className="home__select">
          <input type="checkbox" name="honorselect" />
          <p>This gift is in Honor or in Memory</p>
        </div>
        <div className="link__button">
          <Link to="/checkout" className="link__button">
            <button onClick={bask} className="donate__button">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
