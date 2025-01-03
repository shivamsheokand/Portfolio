import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivam Sheokand </span>
            from <span className="purple"> Narwana,Haryana, India.</span>
            <br />
            I am currently learning ethical hacking & I am full stack developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't give up the beginning is always hardsets ☺️🤞😊"{" "}
          </p>
          <footer className="blockquote-footer">developer sam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
