// import React from 'react'
import image from "../../../assets/gez-xavier-mansfield-b34E1vh1tYU-unsplash 2.svg";
import PropTypes from "prop-types";
import CountButton from "../Count";
import "./myBagCard.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getByCustomerId } from "../../../config/redux/action/myBagAction";

const MybagCard = (props) => {
  const { src, alt, prodTitle, descProduct, cost } = props;
  const { myBagList } = useSelector((state) => state.myBag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByCustomerId())
  }, [dispatch])
  return (
    <div>
      <div id="bag">
        <div className="d-flex align-items-center mt-4 box">
          <div className="form-check ms-4">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
            <div className="row d-flex align-items-center">
              {myBagList.map((item)=>(
              <div className="col-1 ms-3" key={item.id}>
                <img src={item.image} alt={alt} style={{ width: "100%", height: "100%" }}/>
              </div>
              ))}
              <div className="col-6 mt-3 wrapper">
                <div className="container">
                  <p className="prod">{prodTitle}</p>
                  <p className="desc">{descProduct}</p>
                </div>
              </div>
              <div className="col-3 count-button">
                <CountButton />
              </div>
              <div className="col-1 cost">
                <p>Rp{cost}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

MybagCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  prodTitle: PropTypes.string,
  descProduct: PropTypes.string,
  cost: PropTypes.string,
};

export default MybagCard;
