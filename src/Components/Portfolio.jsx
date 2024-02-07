/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio_image.jpg";

const imageAltText = "a laptop, a glass and working on code";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Portfolio Site",
    description:
      "Built with NextJs and deployed to Vercel. Includes my resume, projects, and contact information.",
    url: "https://ravikishan.me/",
  },
  {
    title: "Python Central Hub",
    description:
      "A Python learning hub that includes resources, tutorials, and projects. Built with Astro.",
    url: "https://python-central-hub.vercel.app/",
  },
  {
    title: "Web Development Bootcamp",
    description:
      "A repository of resources for learning web development. Includes a list of free courses, tutorials, and articles.",
    url: "https://github.com/Ravikisha/Web-Development-Bootcamp",
  },
  {
    title: "GitaSaar",
    description:
      "A web app that which answers your daily life questions with the help of Bhagavad Gita.",
    url: "https://github.com/Ravikisha/DocChat-GitaSaar",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"}}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
