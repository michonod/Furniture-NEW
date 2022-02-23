import React from "react";
import classes from "../styles/Project.module.css";
import "antd/dist/antd.css";
import { Image } from "antd";

const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
  "pic6.jpg",
  "pic7.jpg",
  "pic8.jpg",
];

const ProjectPage = () => {
  return (
    <div className={classes.projectContainer}>
      <div className={classes.imageContainer}>
        {images.map((image) => (
          <div className={classes.image} key={image}>
            <Image src={`/${image}`} width={300} height={300} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
