import classes from "../styles/Main.module.css";
import Image from "next/image";

const Main = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.mainText}>
        <h1>
          Hand Made <br />
          High Quality Furniture
          <br /> Designed For You
        </h1>
        <h4>
          Understand the person or people living in a home is a far greater need
          in design
        </h4>
      </div>
      <div className={classes.mainImage}>
        <Image src="/maintable.jpg" height={400} width={400}></Image>
      </div>
    </div>
  );
};

export default Main;
