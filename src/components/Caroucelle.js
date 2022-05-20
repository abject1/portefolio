import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Caroucelle = () => {
  const baseUrl = "../assets/carousel/";
  const datas = [
    {
      id: 1,
      image: `${baseUrl}blog.PNG`,
      title: "Blog HTML&CSS",
      text: `Un simple blog codé en HTML et CSS en live Twitch`,
      link: "https://blog-html-css-lw.netlify.app",
    },
    {
      id: 2,
      image: `${baseUrl}landing-page-one4all.PNG`,
      title: "Landing page One4All",
      text: `Landing page que j'ai réaliser pour intégrer l'équipe One4All`,
      link: "https://one4all-landingpage.netlify.app",
    },
    {
      id: 3,
      image: `${baseUrl}ledor.PNG`,
      title: "Agence Immo Ledor",
      text: `Site web d'une agence Immo fictive réaliser ne live Twitch`,
      link: "https://ledor-v1.netlify.app",
    },
    {
      id: 4,
      image: `${baseUrl}ledorV2.PNG`,
      title: "Agence Immo Ledor V2",
      text: `Remake du site web d'une agence Immo fictive réaliser en live Twitch`,
      link: "https://ledor-v2.netlify.app",
    },
    {
      id: 5,
      image: `${baseUrl}patisserie.PNG`,
      title: "Patisserie le choux crémeux",
      text: `Site vitrine d'une boulangerie pâtisserie fictive réaliser en live Twitch`,
      link: "https://patisserie-lw.netlify.app",
    },
    {
      id: 6,
      image: `${baseUrl}snake.PNG`,
      title: "Jeu du serpent",
      text: `Un jeu du serpent réaliser en JS lors de ma première formation dans le développement web`,
      link: "../assets/carousel/snake/snake.html",
    },
  ];
  return (
    <Carousel>
      {datas.map((slide) => (
        <div key={slide.id} className="carousel">
          <a href={slide.link} target="_blank" rel="noreferrer">
            <img src={slide.image} alt={slide.title} />
            <div>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <p className="click-here">Click Ici pour voir le projet</p>
            </div>
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export default Caroucelle;
