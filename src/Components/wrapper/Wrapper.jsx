import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faIdCard, faShield, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Wrapper = () => {
  const data = [
    {
      cover: <FontAwesomeIcon icon={faTruckFast} />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FontAwesomeIcon icon={faIdCard} />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FontAwesomeIcon icon={faShield} />,
      title: "Shop With Confidence",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <FontAwesomeIcon icon={faHeadset} />,
      title: "24/7 Support",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];

  return (
    <section className='wrapper background'>
      <div className='container grid2'>
        {data.map((val, index) => (
          <div className='product' key={index}>
            <div className='img icon-circle'>{val.cover}</div>
            <h3>{val.title}</h3>
            <p>{val.decs}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wrapper;
