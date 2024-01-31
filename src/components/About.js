import React from "react";

const About = ({ blogImage = "https://via.placeholder.com/215", blogAbout }) => {
  return (
    <div id="about">
      <aside>
        <img src={blogImage} alt='blog logo' />
        <p>{blogAbout}</p>
      </aside>
    </div>
  );
};

export default About;
