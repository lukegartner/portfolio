import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/screenshot-home.png";
import IMG2 from "../../assets/portfolio1.jpeg";
import IMG3 from "../../assets/Map1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Rewards (Planning Center API)",
    github: "https://github.com/lukegartner/rewards",
    demo: "https://pcorewards-28b1ce429de4.herokuapp.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Docomomo MN Modern Registry",
    github: "https://github.com/lukegartner/Docomomo-MN-Modern-Registry",
    demo: "https://docomomo-mn-modern-registry-28e0f754dd03.herokuapp.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Ride Supply (eCommerce)",
    github: "https://github.com/lukegartner/ridesupply",
    demo: "https://ridesupply.netlify.app/",
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
                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
