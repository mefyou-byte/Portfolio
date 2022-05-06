import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matiou Faltas </span>
            from <span className="purple">Graz, Austria.</span>
            <br />I'm a Software Engineer from Graz, Austria. I graduated 2019 from the Higher
            Technical College Graz-Gösting of Electronics & Technical Computer Science and got my Diploma. Creating, maintain, audit and improve systems in particular need is the role i have. 
            Such as desigining and writing some cool Code for dynamic applications, is my passion.
            <br />
            <br />
            After my 5-year journey at college, I have built a solid foundation 
            of computer science. In order to continue my education in computer
            science and also to acquire economic skills, I decided in 2020 to start a bachelor's degree in Business Informatics at FH CAMPUS 02. 
            I work as a software engineer for DCCS IT Business Solution.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Matiou</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
