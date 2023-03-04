import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import drumkit from "../../Assets/Projects/Drumkit.png";
import crwn from "../../Assets/Projects/crwn.png";
import natours from "../../Assets/Projects/Natours.png";
import DiceGame from "../../Assets/Projects/dice-game.png";
import NatoursD from "../../Assets/Projects/Natours-D.png";
import Hotel from "../../Assets/Projects/hotel.png";
import Tindog from "../../Assets/Projects/tindog.png";
import Bankist from "../../Assets/Projects/Bankist.png";
import Codex from "../../Assets/Projects/Codex.png";
import Dalle from "../../Assets/Projects/Dall-e.png";
import gpt3 from "../../Assets/Projects/gpt3.png";
import Ecommerce from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dalle}
              isBlog={false}
              title="Dall-e 2.0"
              description="This site is a Full stack MERN AI Image Generation site.  DALL-E 2.0 is a AI system that can create realistic images and art from a description in natural language. DALL-E 2.0 can create original, realistic images and art from a
              text description. It can combine concepts, attributes, and styles."
              ghLink="https://github.com/VIVEKPRATAP11/dall-e"
              demoLink="https://remarkable-pastelito-bd22f2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Codex}
              isBlog={false}
              title="Codex-Your Coding AI (ChatGPT)"
              description="Codex is a computer program that uses artificial intelligence (AI) and natural language processing (NLP) to understand customer questions and automate responses to them, simulating human conversation. "
              ghLink="https://github.com/VIVEKPRATAP11/codex"
              demoLink="https://codex-six-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce Website"
              description="It is a Modern Full Stack ECommerce React Application with Stripe. It is a e-commerce application will include modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities, and most importantly, the complete integration with Stripe. "
              ghLink="https://github.com/VIVEKPRATAP11/ecommerce_sanity_stripe"
              demoLink="https://ecommerce-sanity-stripe-irqx.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natours}
              isBlog={false}
              title="Natours-A Tour Website"
              description="Natours is a tour booking site in which user can create account and then book any tour from the given list of tour. Users would also be able to view detailed information about each tour, including a description of the itinerary, photos, and reviews from other travelers. This site is made with the use  HTML, CSS, Javascript, NodeJS , MongoDB, Postman, Stripe, Mapbox and Sendgrid. "
              ghLink="https://github.com/VIVEKPRATAP11/natours"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crwn}
              isBlog={false}
              title="CRWN-A Shopping site "
              description="CRWN is a demo of a shopping site in which user can login and add items to cart. This site is build with HTML, CSS , Javascript and ReactJS. In this shopping site Firebase is used for Authentication."
              ghLink="https://github.com/VIVEKPRATAP11/crwn-clothing"
              demoLink="https://cute-muffin-3adaba.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DiceGame}
              isBlog={false}
              title="Dice-Game"
              description="This site is made with the uses HTML, CSS and Javascript. There will be two players in this game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.If the Total Score >= 100 then the current player wins."
              ghLink="https://github.com/VIVEKPRATAP11/Dice-Game"
              demoLink="https://vivekpratap11.github.io/Dice-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bankist}
              isBlog={false}
              title="Bankist"
              description="Bankist is a artificial bank site in which you can transfer money from one bank account to another bank account and also request loan. This site is build with html, css and javascript. For login (1): (user = vp and pin = 1111), (2): (user = ap and pin = 2222)."
              ghLink="https://github.com/VIVEKPRATAP11/Bankist"
              demoLink="https://vivekpratap11.github.io/Bankist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt3}
              isBlog={false}
              title="Gpt-3"
              description="GPT-3 is a Fully Responsive Modern UI/UX Website in React JS "
              ghLink="https://github.com/VIVEKPRATAP11/gtp3"
              demoLink="https://merry-haupia-4edbbb.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify-clone"
              description="A Spotify clone is a music streaming application that aims to replicate the features and functionality of the popular music streaming service, Spotify. Like Spotify, a Spotify clone would allow users to browse and listen audio content. This site is bulid with HTML, CSS and Javascript."
              ghLink="https://github.com/VIVEKPRATAP11/spotify_clone"
              demoLink="https://vivekpratap11.github.io/spotify_clone/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NatoursD}
              isBlog={false}
              title="Natours"
              description="This site is a demo of a tour booking website. This site is build with HTML, advanced CSS properties and SCSS."
              ghLink="https://github.com/VIVEKPRATAP11/Natours-D"
              demoLink="https://vivekpratap11.github.io/Natours-D/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="Drum-Kit"
              description="Drum-kit is a site on which user can play different types of music from the given instrument. This Drum-kit site is build with the use of Html css and javascript.."
              ghLink="https://github.com/VIVEKPRATAP11/drumkit"
              demoLink="https://vivekpratap11.github.io/drumkit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              isBlog={false}
              title="Hotel-Site"
              description="This site is a demo of a Hotel website. This site gives the information such as location, meal, fitness room, history of hotel. There is a contact page through which user can contact with owner. This site is build with HTML and CSS."
              ghLink="https://github.com/VIVEKPRATAP11/Hotel-Website"
              demoLink="https://vivekpratap11.github.io/Hotel-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tindog}
              isBlog={false}
              title="TinDog"
              description="Tindog is a simple site build with HTML, CSS and Bootstarp."
              ghLink="https://github.com/VIVEKPRATAP11/project4"
              demoLink="https://vivekpratap11.github.io/project4/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
