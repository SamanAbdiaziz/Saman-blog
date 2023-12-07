import React from "react";
import "./sidebar.css";
import image from "../../assests/imuges.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="image-container">
        <img
          src={image}
          alt=""  className="blend-image"
        />
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">"The Power of Education: Nurturing Minds, Shaping Futures"</span>
        <p>
        Education is the cornerstone of societal advancement, serving as the catalyst for personal growth and collective progress.
        Our educational blog is a reservoir of knowledge, fostering curiosity and illuminating paths to enlightenment. Through insightful articles,
        engaging narratives, and expert perspectives, we delve into diverse educational realms.
        Empowering readers with innovative teaching methodologies, educational technology insights, and inspirational success stories,
         we aim to illuminate the transformative power of education. From early childhood education to lifelong learning, 
         our blog navigates the evolving landscapes of academia, nurturing the inquisitive minds of learners and educators alike.
        Join us on a journey where learning knows no bounds, where knowledge becomes empowerment, 
        and where education shapes a brighter, more enlightened future.
        </p>
        </div>
    </div>
  );
}

export default Sidebar;
