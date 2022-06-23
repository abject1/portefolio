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
        l'électronique vers lequel je me suis reconverti après avoir travaillé
        dans la maintenance pendant 5 ans. J'ai toujours été passionné par la
        création, que ce soit des DIY électroniques ou bien des mappings de jeux
        ou encore des serveurs de jeux.
      </p>
      <button className="btn m1" onClick={() => seenNextApropos()}>
        Lire la suite
      </button>
      <p id="secondP">
        J'ai passé 3 ans à développer des serveurs GTAV RP en LUA et en SQL.
        Très vite j'ai commencé à vouloir faire de cette passion un métier. J'ai
        compris que je devais soit développer des jeux vidéo soit (je devais) me
        diriger vers une autre branche du développement informatique. Je me suis
        renseigné sur le développement de jeux vidéo, d'application mobile et le
        développement d'application web. L'application web a tout de suite
        retenu mon attention et c'est pour cela que j'ai commencé à étudier le
        sujet en profondeur, à suivre des tutoriels pour comprendre leurs bases.
        Au fil du temps j’ai compris que c’était vraiment le métier que je
        voulais entreprendre. Je me suis mis à coder jours et nuits, à me
        perfectionner avec des sites fictifs ou pour des amis ouvrant leur
        propre entreprise. Mon but aujourd'hui est de rejoindre OpenClassRooms
        pour faire un BAC+2 (voir même plus).
      </p>
    </div>
  );
};

export default Apropos;
