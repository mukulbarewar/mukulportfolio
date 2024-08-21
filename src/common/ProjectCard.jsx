import React from "react";

function ProjectCard({ src, link, h3, p }) {
  return (
    <div
      style={{
        border: "2px solid grey",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
        <div
          className="btn-container"
          style={{ gap: "1rem", display: "flex", justifyContent: "center" }}
        >
          <button
            className="btn btn-color-2 project-btn"
            style={{
              gap: "1rem",
              textAlign: "center",
              fontFamily: "Poppins",
              bgColor: "white",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "10px",
            }}
            onClick={() => "location.href='https://github.com/'"}
          >
            Github
          </button>
          <button
            className="btn btn-color-2 project-btn"
            style={{
              gap: "1rem",
              textAlign: "center",
              fontFamily: "Poppins",
              bgColor: "white",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "10px",
            }}
            onClick={() => "location.href='https://github.com/'"}
          >
            Live Demo
          </button>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
