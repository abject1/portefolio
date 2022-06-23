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
          Né dans une famille de motard, j'ai été piqué dès l'âge de 3 ans et
          demi quand mon père m'a ramené ma piwi50. J'adore faire des balades à
          moto mais également les entretenir. Plus jeune j'adorais améliorer mes
          50cc et 125cc avec mon père jusqu'à même tard mais maintenant que j'ai
          l'âge de rouler avec des plus grosses cylindrées je me contente de
          faire des balades.
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
          Plus jeune j'adorais jouer à la console avec mes amis après l'école,
          très vite j’ai pu m’offrir mon premier PC et j'ai découvert d’autres
          styles de jeux ou l'on pouvait rajouter des milliers de mods et
          complétement modifier un jeu-vidéo. C'est à ce moment-là que j'ai
          commencé à m'intéresser à la modélisation 3D et au développement de
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
            L'électronique me passionne et j'ai toujours aimer bricoler. Je me
            suis offert une imprimante 3D et une graveuse CNC pour faire des
            impressions et des PCB. J'adore créer des petits objets, je me suis
            fait un vrai atelier de micro-conception avec le temps.
          </p>
        </div>
        <div className="underlineHobbies"></div>
        <div className="developpement">
          <h2>DEV serveur de jeux</h2>
          <p>
            J'ai découvert ma passion pour le développement web et l'envie de
            travailler dans ce domaine en commencant a développer des serveurs
            de jeux pour GTA V, des mappings pour Farming Simulator et des mods
            pour Minecraft, fondateur de plusieurs serveur depuis plus de 5 ans
            je développe encore des serveur GTA pour des personnes qui ne sont
            pas intéresser par ce monde, je suis également encore fondateur d'un
            serveur Minecraft modée.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
