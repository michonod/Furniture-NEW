import React from "react";
import classes from "../styles/SectionIdeas.module.css";
import {
  HomeOutlined,
  DatabaseFilled,
  ToolFilled,
  SettingFilled,
} from "@ant-design/icons";
const SectionIdeas = () => {
  const data = [
    {
      logo: <HomeOutlined style={{ fontSize: "52px" }} />,
      title: "Smooth workflow",
      text: "We provide the most easy smooth workflow of interior design",
    },
    {
      logo: <DatabaseFilled style={{ fontSize: "52px" }} />,
      title: "Perfectly design",
      text: "Our company assists customers to locate an area, create a floor plan, as design their residence's interior throughout and after construction",
    },
    {
      logo: <SettingFilled style={{ fontSize: "52px" }} />,
      title: "Carefully planned",
      text: "We coordinate all the details with our clients. Usually, we provide our customers with a special site, where they can check the building process.",
    },
    {
      logo: <ToolFilled style={{ fontSize: "52px" }} />,
      title: "Smartly execute",
      text: "Only professionals work in our organization. The sketch, which was chosen by our client, would be maid according to all details in the precise time.",
    },
  ];

  return (
    <div className={classes.sectionContainer}>
      {data.map((item) => {
        return (
          <div className={classes.sectionContainerDiv}>
            <h5>{item.logo}</h5>
            <h4>{item.title.toUpperCase()}</h4>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SectionIdeas;
