import React from 'react';
import imgadan from '../assests/imgadan.jpg';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="bio-section">
          <h2>My Journey in Education</h2>
          <p>
            With over 25 years of experience in the education sector, I am a seasoned Curriculum Specialist. 
            Currently, I am contributing my expertise to Adam Smith International as a Curriculum Expert on the 
            Somalia Education Systems Strengthening Programme (SESSP). My journey has seen me taking on roles 
            such as a member of the National Taskforce for the implementation of the competency-based curriculum 
            in Kenya, Technical Advisor for the Kenya Essential Education Programme, and Curriculum Development 
            Advisor in Somalia.
          </p>
          <p>
            My diverse experience extends to teaching, curriculum development, and consultancy roles in Kenya 
            and Somalia, working with organizations like UNICEF, UNESCO, and USAID. Significant achievements 
            include developing the Pre-service Teacher Education Curriculum for Somaliland and leading the TIVET 
            curriculum project in Somalia.
          </p>
          <p>
            I hold an M.Ed. from Khartoum, an M.A. in Sociology, and a Ph.D. in Religion from the University of Nairobi. 
            My educational background and practical experience equip me to drive positive changes in educational 
            systems worldwide.
          </p>
        </div>
        <div className="image-section">
          <img src={imgadan} alt="Curriculum Specialist" />
        </div>
      </div>
    </div>
  );
}

export default About;
