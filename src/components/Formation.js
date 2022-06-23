import React from "react";

const Formation = () => {
  const seenNext = () => {
    document.getElementById("nextText").classList.toggle("nextSuite");
  };
  return (
    <div className="formation">
      <h1>Mes Formations</h1>
      <div className="bacproElec">
        <h3>BAC PRO Electrotechnique</h3>
        <h4>2015-2018</h4>
        <h6>Non obtenue</h6>
        <p>
          3 ans de formation dans le domaine de l'électronique industrielle.
          J'ai pu apprendre beaucoup de choses en lien avec l'électricité
          général et la programmation de machine industrielle.
        </p>
      </div>
      <div className="underlineFormation"></div>
      <div className="bacproTMSEC">
        <h3>BAC PRO TMSEC</h3>
        <h4>2020-2021</h4>
        <h6>Obtenue avec mension assez bien</h6>
        <p>
          1 an de formation par le Greta et pôle emplois. J'ai pu apprendre
          diverse chose sur le monde des énergies chaudes et froides.
        </p>
      </div>
      <div className="underlineFormation"></div>
      <div className="dymaHTMLCSS">
        <h3>Dyma | HTML&CSS</h3>
        <h4>2021</h4>
        <h6>Obtenue</h6>
        <p>
          formation autour de HTML&CSS j'ai pu apprendre les bases de ce langage
          de balisage et de style, j'ai pu réaliser un premier porte-folio à la
          fin de cette formation. On aborde également les bases de Sass.
        </p>
      </div>
      <button className="btn m1" onClick={() => seenNext()}>
        Afficher la suite
      </button>
      <div className="next" id="nextText">
        <div className="underlineFormation"></div>
        <div className="dymaJS">
          <h3>Dyma | JavaScript</h3>
          <h4>2021-2022</h4>
          <h6>En cours</h6>
          <p>
            Formation JavaScript autour du quel j'apprend beaucoup de chose sur
            JavaScript, qui pour moi ressemble au langage LUA que j'ai utilisé
            pendant 3 ans de par les fonctions, les variables.
          </p>
        </div>
        <div className="underlineFormation"></div>
        <div className="Academy">
          <h3>26 Academy | Devenir développeur JavaScript</h3>
          <h4>2021</h4>
          <h6>Obtenue</h6>
          <p>
            Formation JavaScript (que personnellement je n'ai pas apprécié et
            avec laquelle je n'ai pas appris suffisamment mais) qui m’a permis
            de développer une forte personnalité dans la recherche afin de
            comprendre la formation.
          </p>
        </div>
        <div className="underlineFormation"></div>
        <div className="dymaLinuxBash">
          <h3>Dyma | Linux et Bash</h3>
          <h4>2021-2022</h4>
          <h6>En cours</h6>
          <p>
            Formation Linux et Bash sur laquelle j'apprends à utiliser
            l'environnement de travail Linux Ubuntu et qui me permet de me
            familiariser avec son application en entreprise l'utilisant (je ne
            l'utilise pas personnellement et je reste habitué à Windows même si
            je dois admettre que Linux et bien plus performant et pratique à
            l'utilisation, cela me permet tout de même de l'utiliser de plus en
            plus afin d'être familiarisé pour l'utilisation en entreprise de
            Linux.)
          </p>
        </div>
        <div className="underlineFormation"></div>
        <div className="udemyDevenirDeveloppeur">
          <h3>Udemy | Devenir développeur WEB avec John Taeb</h3>
          <h4>2021-2022</h4>
          <h6>Obtenue</h6>
          <p>
            Formation complète (afin d'apprendre à développer ses propres)
            concernant l'élaboration de sites WEB, interessante malgré son
            ancienneté (HTML, CSS, Framework Bootstrap? Javascript? Ajax,
            jQuery, backend avec du PHP et du SQL et un peu de CMD Workpress
            (une formation complète qui m’a appris beaucoup malgré le fait
            qu'elle commence à être ancienne). La formation commence par aborder
            le HTML, le CSS et le Framework Bootstrap. Ensuite elle aborde
            Javascript, ajax et jQuery, une partie qui m’a permis de faire
            croitre mes connaissances dans JavaScript même si j'avais un peu
            plus de mal avec la version JS qui n'était plus exactement le même.
            On a touche également un peu au backend avec du PHP et du SQL j'ai
            eu un peu de mal cette partie de la formation était pour moi trop.
            On a fini par utiliser aussi un petit peu le CMD WordPress.)
          </p>
        </div>
        <div className="underlineFormation"></div>
        <div className="dymaGit">
          <h3>Dyma | Git</h3>
          <h4>2022</h4>
          <h6>En cours</h6>
          <p>
            Formation qui aborde git et qui mes trés utiles pour comprendre
            github afin de pouvoir stocker tous mes projets en ligne et c'est
            également trés utile pour le travail d'équipe.
          </p>
        </div>
        <div className="underlineFormation"></div>
        <div className="fromScratch">
          <h3>From Scratch | Mastering</h3>
          <h4>2022</h4>
          <h6>En cours</h6>
          <p>
            J'ai découvert From Scratch sur youtube en voulant poffinée mon JS
            et commencer a apprendre React, après avoir suivie ses tutos gratuit
            sur youtube j'ai décider d'acheter sa formation complete qui touche
            HTML, CSS, GitHub, SEO, Sass, JS et React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formation;
