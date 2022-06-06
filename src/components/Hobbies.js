import React from "react";

const Hobbies = () => {
  const seenNextHobbies = () => {
    document.getElementById("nextHobbies").classList.toggle("seenNextHobbies");
  };
  return (
    <div className="hobbies">
      <h1>Mes hobbies & passions</h1>
      <div className="moto">
        <h2>La moto</h2>
        <p>
          Née dans une famille de motard j'ai était piquer a l'âge de 3 ans et
          demi quand mon père ma ramener ma piwi50, j'adore faire des balades en
          moto mais également les entretenires, plus jeune j'adorer traffiquer mes
          50 et 125 avec mon père jusqu'a pas d'heure mais maintenant que j'ai
          l'âge de rouler des gros cube je ne passe plus de temps a les
          traffiquer mais je passe plus de temps a les rouler.
        </p>
      </div>
      <div className="underlineHobbies"></div>
      <div className="maquette">
        <h2>Les maquettes</h2>
        <p>
          J'adore passer du temps a faire du modélisme ce côté minusieux et
          précis me passionne.
        </p>
      </div>
      <div className="underlineHobbies"></div>
      <div className="jeux">
        <h2>Les jeux vidéos</h2>
        <p>
          Plus jeune j'adorer jouer a la console avec mes amis après l'école
          très vite je me suis offert mon premier PC et j'ai découvert un autres
          style de jeux ou l'on pouvais rajouter des milliers de mods et
          complétement changer un jeux vidéo. c'est a ce moment la que j'ai
          commencer a m'interesser a la modélisation 3D et au développement de
          mods / script.
        </p>
      </div>
      <button className="btn m1" onClick={() => seenNextHobbies()}>
        Afficher la suite
      </button>
      <div id="nextHobbies">
        <div className="underlineHobbies"></div>
        <div className="microConception">
          <h2>Micro conception</h2>
          <p>
            J'adore l'electronique j'ai toujours aimé bidouiller des petits trucs
            je me suis offert une imprimante 3D et une graveuse CNC pour faire
            des impressions et des PCB j'adore fabriquer des petits gadjettes je me
            suis fait un vrai atelier de micro conception avec le temps.
          </p>
        </div>
        <div className="underlineHobbies"></div>
        <div className="developpement">
          <h2>DEV serveur de jeux</h2>
          <p>
            J'ai découvert ma passion pour le développement web et l'envie de
            travailler dans ce domaine en commencant a développer des serveurs de
            jeux pour GTA V, des mappings pour Farming Simulator et des mods pour
            Minecraft, fondateur de plusieurs serveur depuis plus de 5 ans je
            développe encore des serveur GTA pour des personnes qui ne sont pas
            intéresser par ce monde, je suis également encore fondateur d'un
            serveur Minecraft modée.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
