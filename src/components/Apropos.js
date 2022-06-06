import React from "react";

const Apropos = () => {
  const seenNextApropos = () => {
    document.getElementById("secondP").classList.toggle("seenSecondP");
  };
  return (
    <div className="apropos">
      <h1>Qui suis-je?</h1>
      <p>
        Je m'appelle Lucas WURTZ. J'adore l'univers de l'informatique et de
        l'électronique vers lequel je me suis reconverti après avoir travaillé dans la maintenance pendant 5 ans. 
        J'ai toujours été passionné par la création, que ce soit des DIY électroniques ou bien des mappings de jeux ou
        encore des serveurs de jeux.
      </p>
      <button className="btn m1" onClick={() => seenNextApropos()}>
        Lire la suite
      </button>
      <p id="secondP">
        J'ai passé 3 ans à développer des serveurs GTAV RP en LUA et en SQL.
       Trés vite, j'ai souhaité faire de mon hobby mon activité principale. J'ai 
        compris que je devais évoluer vers les jeux vidéo ou me diriger vers une autre branche du développement informatique. 
        Je me suis concentré sur le développement d'applications mobile et d'applications web. Au final, j'ai opté pour 
       l'application web et j'ai obtenu les certifications suivantes : html, css, js.       
      J'ai continué à me former et à coder jour et nuit.  Aujourd'hui encore, mon but est de rejoindre OpenClassRooms pour
       obtenir un BAC+2 en alternance et même aller plus loin. Je code des sites pour moi en fictif mais également pour des 
       amis qui ouvrent leur entreprise.
      </p>
    </div>
  );
};

export default Apropos;
