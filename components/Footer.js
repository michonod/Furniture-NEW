import React from "react";
import classes from "../styles/Footer.module.css";
import Link from "next/link";
import { FacebookFilled, InstagramOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <h5>Find us on social network</h5>
      <div className={classes.socialMedia}>
        <Link href={"https://www.facebook.com/Furniture.designed.for.you"}>
          <div>
            <p>Facebook</p>
            <FacebookFilled style={{ fontSize: "30px", color: "#3b5998" }} />
          </div>
        </Link>
        <Link href={"https://www.instagram.com/furniture.creation/"}>
          <div>
            <p>Instagram</p>
            <InstagramOutlined
              style={{
                fontSize: "30px",
                color: "#d6249f",
              }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
