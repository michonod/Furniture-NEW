import React from "react";
import classes from "../styles/About.module.css";

const AboutUsPage = () => {
  return (
    <div className={classes.about}>
      <div className={classes.aboutContainer}>
        <h2> We Work for You</h2>
        <p>
          We are here to provide you with exceptional customer service whenever
          you need us...before, during and after the sale. We're dedicated to
          giving you the best service and products possible each and every time.
          Your satisfaction is always our goal.
        </p>
        <h2>Quality, Selection Value</h2>
        <p>
          We offer the very best in home and office furniture. We have access to
          any style of furniture you may be looking for from contemporary,
          transitional and traditional to rustic. If you don't see something in
          our showroom that's exactly what you need, we can always order from
          thousands of products within our furniture catalogs. And best of all,
          you'll find our everyday low prices are WELL BELOW RETAIL! If you find
          something for less elsewhere, we'll match their price!
        </p>
        <h2>We Give You Options</h2>
        <p>
          When it comes to options for furnishing your home or office, no one
          else has more to offer! Need to customize? We can! With name brand
          partners and value-play options like our Clearance Center or Furniture
          Rentals, we can find a solution for every taste and budget. Offering
          flexible methods of payment is just another way we can service our
          customers.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
