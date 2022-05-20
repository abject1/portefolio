import React from "react";
import Header from "../components/Header";
import Formation from "../components/Formation";
import Professionel from "../components/Professionel";
import Hobbies from "../components/Hobbies";
import Competences from "../components/Competences";
import Langue from "../components/Langue";
import Contact from "../components/Contact";
import Apropos from "../components/Apropos";
import Caroucelle from "../components/Caroucelle";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="underline"></div>
      <Apropos />
      <div className="underline"></div>
      <h1 className="carouselTitle">Mes projets</h1>
      <Caroucelle />
      <div className="underline"></div>
      <Formation />
      <div className="underline"></div>
      <Professionel />
      <div className="underline"></div>
      <Competences />
      <div className="underline"></div>
      <Langue />
      <div className="underline"></div>
      <Hobbies />
      <div className="underline"></div>
      <Contact />
    </div>
  );
};

export default Home;
