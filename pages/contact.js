import React from "react";
import Image from "next/image";
import classes from "../styles/Contact.module.css";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className={classes.contactContainer}>
      <h2>Contact us on our social network profiles</h2>
      <div>
        <Link href={"https://www.facebook.com/Furniture.designed.for.you"}>
          <Image
            src="/facebook.png"
            width={100}
            height={100}
            alt="facebook"
          ></Image>
        </Link>
      </div>
      <div>
        <Link href={"https://www.instagram.com/furniture.creation/"}>
          <Image
            src="/instagram.png"
            width={100}
            height={100}
            alt="instagram"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
