import React from "react";

const Apropos = () => {
  const seenNextApropos = () => {
    document.getElementById("secondP").classList.toggle("seenSecondP");
  };
  return (
    <div className="apropos">
      <h1>Qui suis-je?</h1>
      <p>
        Je m'appel Lucas je suis j'adore l'univers de l'informatique et de
        l'électonique, issue de 3 ans dans le domaine de l'électronique en
        industrie et 2 ans dans la maintenance j'ai toujours etait pasionner par
        la création que sa soit des DIY électronique ou bien des maps de jeux ou
        encore des serveur de jeux.
      </p>
      <button className="btn m1" onClick={() => seenNextApropos()}>
        Lire la suite
      </button>
      <p id="secondP">
        J'ai passer 3 ans a développer des serveur GTAV RP en LUA et en SQL,
        trés vite j'ai commence a vouloir faire de ce hobbies un métier j'ai
        compris que soit je devais développer des jeux vidéo soit je devais me
        dirigée vers une autres branche du développement informatique, je me
        suis renseigner sur le développement de jeux vidéo, d'applis mobile et
        le développement d'application web, l'application web a retenue mon
        attention et c'est pour cela que j'ai commencer a me renseigner sur le
        sujet en profondeur a faire deux trois tuto pour comprendre les bases et
        êtres sur que c'est ce qui me plait et effectivement c'est ce qui me
        plait j'ai donc commencer a faire des formations et a coder jours et
        nuit aujourd'hui encore mon but est de rejoindre OpenClassRooms pour
        faire un BAC+2 et même aller plus loin, je code des site pour moi en
        fictife mais également pour des amis qui ouvre leurs entreprise.
      </p>
    </div>
  );
};

export default Apropos;
