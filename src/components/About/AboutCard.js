import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am an ambitious graduate student at George Mason University, driven by a profound passion for deep learning, competitive coding, and web development. With a dedicated and analytical approach, I strive to solve problems and explore new possibilities with a curious mindset. I possess exceptional proficiency in the programming languages of Python and C++, utilizing them effectively in my pursuits
          </p>


          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
