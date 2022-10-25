import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpeg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "eCommerce",
    github: "https://github.com/lukegartner/eCommerce",
    demo: "https://ecommerce-lukegartner.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Cocktail search",
    github: "https://github.com/lukegartner/cocktails",
    demo: "https://cocktails-luke-gartner.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Scorekeeping app",
    github: "https://github.com/lukegartner/the-ledger",
    demo: "https://the-ledger-luke-gartner.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Disc golf score card",
    github: "https://github.com/lukegartner/frolf-course",
    demo: "https://frolf-course.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
