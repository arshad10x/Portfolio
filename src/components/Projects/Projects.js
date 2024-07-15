import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import meal from "../../Assets/Projects/meal.png";
import furniture from "../../Assets/Projects/furniture.png";
import weather from "../../Assets/Projects/weather.png";
import education from "../../Assets/Projects/education.png";
import RR from "../../Assets/Projects/reservation.png";
import grain from "../../Assets/Projects/grain.png";
import cryptoDashbaord from "../../Assets/Projects/cryptoDashboard.png"
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
              imgPath={cryptoDashbaord}
              isBlog={false}
              title="Crypto Dashboard"
              description="I developed the Crypto Dashboard as a sleek and modern web application using React.js. The dashboard currently features a user-friendly UI with placeholder data, showcasing my expertise in frontend development. I utilized Chakra UI for a polished design and React Router DOM for seamless navigation, setting the groundwork for future integration with real-time cryptocurrency market data. This project demonstrates my skills in creating intuitive and visually appealing applications."
              ghLink="https://github.com/arsh10x/crypto_dashboard"
              demoLink="https://crypto-dashboard-purple.vercel.app/"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RR}
              isBlog={false}
              title="Rapid Reservation"
              description="Rapid Hotel Reservation System: Developed a comprehensive React-based application that allows users to book hotel reservations by selecting dates and the number of guests. Utilized a date range library for intuitive date selection and implemented seamless navigation to a results page displaying available hotels with their images. Employed React hooks for state management ."
              ghLink="https://github.com/arshad10x/RapidReservations"
              demoLink="https://github.com/arshad10x/RapidReservations"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grain}
              isBlog={false}
              title="Golden Grain"
              description="HTML to React.js Client Site: Recreated a client site from scratch, transitioning from HTML and jQuery to React.js. Integrated dynamic data from JSON, utilizing the map function to render components efficiently. Employed React hooks for state management and side effects, and used React Router for seamless navigation. Enhanced the user experience with a responsive design and optimized performance."
              ghLink="https://golden-grain.vercel.app/"
              demoLink="https://golden-grain.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meal}
              isBlog={false}
              title="Meal Finder"
              description="Meal Finder App: Developed a responsive Meal Finder app using React. This application allows users to search for meals and filter results accordingly. Integrated with a meal API to fetch dynamic data, displaying meal options based on user input. Leveraged React hooks for state management and asynchronous data fetching. Ensured a user-friendly experience with a responsive design."
              ghLink="https://github.com/arshad10x/MealFinder"
              demoLink="https://meal-finder-xi-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furniture}
              isBlog={false}
              title="Modern Furniture"
              description="I designed and developed a sleek and modern furniture website using HTML and CSS. The website features a multipage layout, offering a seamless browsing experience for users. To enhance the site's visual appeal and engagement, I incorporated CSS animations, creating a dynamic and interactive interface."
              ghLink="https://github.com/arshad10x/furniture-store"
              demoLink="https://the-modern-furniture.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="I developed a weather application using React.js, leveraging the Weather API to fetch real-time weather data. The app provides users with up-to-date weather information, including temperature, humidity, and wind speed, for their location or any specified location."
              ghLink="https://github.com/arshad10x/weather-app"
              demoLink="https://weather-app-arshad10x.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={education}
              isBlog={false}
              title="Edusity"
              description="I designed and developed a stunning website using React.js. The site features captivating animations that enhance the user experience and make the interface more engaging. To manage the form submissions, I implemented a web3form, leveraging React hooks to handle the form state efficiently."
              ghLink="https://github.com/arsh10x/Edusity"
              demoLink="https://techies-world.vercel.app/"
           
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
