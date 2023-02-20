import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import drumkit from "../../Assets/Projects/Drumkit.png";
import crwn from "../../Assets/Projects/crwn.png";
import chatify from "../../Assets/Projects/Natours.png";
import DiceGame from "../../Assets/Projects/dice-game.png";
import NatoursD from "../../Assets/Projects/Natours-D.png";
import Hotel from "../../Assets/Projects/hotel.png";
import Tindog from "../../Assets/Projects/tindog.png";
import Bankist from "../../Assets/Projects/Bankist.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Natours-A Tour Website"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/VIVEKPRATAP11/natours"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NatoursD}
              isBlog={false}
              title="Natours"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/VIVEKPRATAP11/Natours-D"
              demoLink="https://vivekpratap11.github.io/Natours-D/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crwn}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/VIVEKPRATAP11/crwn-clothing"
              demoLink="https://cute-muffin-3adaba.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bankist}
              isBlog={false}
              title="Bankist"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/VIVEKPRATAP11/Bankist"
              demoLink="https://vivekpratap11.github.io/Bankist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify-clone"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/VIVEKPRATAP11/spotify_clone"
              demoLink="https://vivekpratap11.github.io/spotify_clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DiceGame}
              isBlog={false}
              title="Dice-Game"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/VIVEKPRATAP11/Dice-Game"
              demoLink="https://vivekpratap11.github.io/Dice-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumkit}
              isBlog={false}
              title="Drum-Kit"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/VIVEKPRATAP11/drumkit"
              demoLink="https://vivekpratap11.github.io/drumkit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              isBlog={false}
              title="Hotel-Site"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/VIVEKPRATAP11/Hotel-Website"
              demoLink="https://vivekpratap11.github.io/Hotel-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tindog}
              isBlog={false}
              title="TinDog"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
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
