import React from "react";

const Formation = () => {
  const seenNext = () => {
    document.getElementById("nextText").classList.toggle("nextSuite");
  };
  return (
    <div className="formation">
      <h1>Mes Formations</h1>
      <div className="underlineTitleFormation"></div>
      <div className="bacproElec">
        <h3>BAC PRO Electrotechnique</h3>
        <h4>2015-2018</h4>
        <h6>Non obtenue</h6>
        <p>
          3 ans de formation dans le domaine de l'électronique industrielle.
          J'ai pu apprendre beaucoup de chose en lien avec l'électricitée
          géneral et la programmation de machine industrielle.
        </p>
      </div>
      <div className="underlineFormation"></div>
      <div className="bacproTMSEC">
        <h3>BAC PRO TMSEC</h3>
        <h4>2020-2021</h4>
        <h6>Obtenue avec mension assez bien</h6>
        <p>
          1 an de formation part le gretta et pôle emplois. J'ai pu apprendre
          diverse chose sur le monde des énergie chaude et froide.
        </p>
      </div>
      <div className="underlineFormation"></div>
      <div className="dymaHTMLCSS">
        <h3>Dyma | HTML&CSS</h3>
        <h4>2021</h4>
        <h6>Obtenue</h6>
        <p>
          formation autour de HTML & CSS j'ai pu apprendre les base de ce
          language de balisage et de style, j'ai pu réaliser un premier
          portefolio a la fin de cette formation. On aborde également les bases
          de Sass.
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
            JavaScript que pour moi ressemble au language LUA que j'ai utiliser
            pendant 3 ans de part les fonction, les variables.
          </p>
        </div>
        <div className="underlineFormation"></div>
        <div className="Academy">
          <h3>26 Academy | Devenir développeur JavaScript</h3>
          <h4>2021</h4>
          <h6>Obtenue</h6>
          <p>
            Formation JavaScript que personnellement je n'ai pas apprécier et
            que avec la quel je n'est pas apris grand chose mais sa ma permis de
            développer une forte personnaliter dans la recherche afin de
            comprendre la formation.
          </p>
        </div>
        <div className="underlineFormation"></div>
        <div className="dymaLinuxBash">
          <h3>Dyma | Linux et Bash</h3>
          <h4>2021-2022</h4>
          <h6>En cours</h6>
          <p>
            Formation Linux et Bash sur la quel j'apprend a utiliser
            l'environement de travail Linux Ubunutu, je ne l'utilise pas
            personnellement je reste un habituer a Windows même si j'avoue que
            Linux et bien plus performant et pratique a l'utilisation, cela me
            permet tous de même de l'utiliser de plus en plus afin d'étre
            familiariser pour l'utilisation en entreprise de Linux.
          </p>
        </div>
        <div className="underlineFormation"></div>
        <div className="udemyDevenirDeveloppeur">
          <h3>Udemy | Devenir développeur WEB avec John Taeb</h3>
          <h4>2021-2022</h4>
          <h6>Obtenue</h6>
          <p>
            Formation complete afin d'apprendre a développer ses propre site
            WEB, une formation compléte qui ma appris beaucoup malgré qu'elle
            commence a être ancienne et qu'elle n'est pas renouvelle. La
            formation commence part abordée HTML, CSS et le framework Bootstrap.
            Ensuite elle aborde Javascript, ajax et jquery une partie qui ma
            permis de faire croitre mes connaissance dans JavaScript même si
            j'avais un peu de mal avec la version JS qui n'était plus exactement
            pareil a celle actuel. On a touche également un peu au backend avec
            du PHP et du SQL j'ai eux un peu de mal cette partie de la formation
            est très rapide et je suis actuellement plus dans une pérceverance
            dans le front-end. On a fini part utiliser un petit peu le CMD
            WordPress.
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
            et commencer a apprendre React, après avoir suivie c'est tuto
            gratuit sur youtube j'ai décider d'acheter sa formation complete qui
            touche HTML, CSS, GitHub, SEO, Sass, JS et React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formation;
