import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Souhail Nahed </span>
            from <span className="purple"> Casablanca, Morocco.</span>
            <br /> I am an engineer graduated from the National school of applied sciences
              at El jadida city.
            <br />
            Additionally, I am currently employed as a freelancer at
            home.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Souhail Nahed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
