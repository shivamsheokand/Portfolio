import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Preloader from "../Pre";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // Fetch projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.aicoders.in/getProjects.php");
        const data = await response.json();
        // Ensure that only the 'data' array is assigned to 'projects'
        if (data.status === "success") {
          setProjects(data.data); // Set 'data' (the array of projects)
        } else {
          setError("Failed to fetch projects");
        }
      } catch (error) {
        if (retryCount < 3) {
          // Retry logic: Retry fetching data up to 3 times
          setRetryCount(retryCount + 1);
          setError("Error fetching projects. Retrying...");
        } else {
          setError("Failed to fetch projects after multiple attempts.");
          setLoading(false);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [retryCount]);

  if (loading) {
    // Show Preloader component when loading
    return <Preloader load={loading} />;
  }

  if (error) {
    return (
      <div>
        <h1 className="minh">{error}</h1>
        {/* Retry button to manually retry fetching projects */}
        {retryCount < 3 && (
          <button onClick={() => setRetryCount(retryCount + 1)}>
            Retry Loading Projects
          </button>
        )}
      </div>
    );
  }

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
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={`https://api.aicoders.in/${project.image}`} // Full path to image
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.githublink}
                demoLink={project.demolink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
