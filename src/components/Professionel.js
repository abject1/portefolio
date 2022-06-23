import React from "react";

const Professionel = () => {
  const seenNextBoehliApp = () => {
    document
      .getElementById("nextBoehliApp")
      .classList.toggle("seenNextBoehliApp");
  };
  const seenNextExpPro = () => {
    document
      .getElementById("nextSeenExpPro")
      .classList.toggle("seenNextExpPro");
  };
  const seenNextIbag = () => {
    document.getElementById("nextIbag").classList.toggle("seenIbag");
  };
  const seenNextOneforAll = () => {
    document
      .getElementById("nextOneforAll")
      .classList.toggle("seenNextOneforAll");
  };
  return (
    <div className="professionel">
      <h1>Mon expérience professionel</h1>
      <div className="boehliApprentis">
        <h3>Boehli | Apprentis technicien de maintenance</h3>
        <h4>2015-2018</h4>
        <p>
          Une première expérience professionnelle en tant qu’apprenti technicien
          de maintenance pendant que je réalisais mon BAC PRO Electrotechnique.
          Une expérience qui m’a permis d'apprendre à travailler en équipe mais
          également en autonomie. J'ai beaucoup appris à trouver moi-même quel
          travail faire mais aussi à juger de la priorité des tâches. Cette
          expérience m’a aussi appris à gérer des maintenances préventives au
          quotidien afin d'être sûr que les machines qui démarrent le lundi
          fonctionneront dans la durée.
        </p>
        <button className="btn m1" onClick={() => seenNextBoehliApp()}>
          Lire la suite
        </button>
        <p id="nextBoehliApp">
          J'ai également eu l'occasion de réaliser de la maintenance curative et
          programmée, d’assister à des réunions de mise en place de maintenance
          curative afin de prévoir le délai qu'il nous faudra avec une marge
          supplémentaire en cas de souci pendant la maintenance. J'ai également
          eu la chance d'assister à l'agrandissement de l'usine, la mise en
          place d'équipement neuf et d’une nouvelle ligne de production. J’ai
          également beaucoup assisté le directeur d'usine et l'automaticien pour
          faire de l'automatisme de machine que cela soit pour améliorer les
          programmes ou réaliser des nouveaux programmes pour des machines qui
          n'était pas automatisée à la base. J'ai également pu mettre en place
          tout le système de vidéo surveillance du magasin d'usine et du musée
          qui a été mis en place lors de l'agrandissement de l'usine. de
          l'usine.
        </p>
      </div>
      <div className="underlinePro"></div>
      <div className="geodis">
        <h3>Geodis | Magasiniée</h3>
        <h4>2018-2019</h4>
        <p>
          Mon réel premier métier (pour moi) a été en tant qu'intérimaire, j'ai
          appris à gérer un magasin, à faire en sorte que mon stock ne soit
          jamais vide et de toujours avoir à disposition le matériel dont les
          ouvriers d’Alstom avaient besoin. Parce que Geodis étant situé sur le
          site d’Alstom, ma tâche principale était de préparer les commandes
          afin de les livrer le matin même dans les différents bâtiments et aux
          différents postes. J'ai appris à être 100% autonome, nous étions deux
          livreurs, moi-même qui m'occupais du matériel de base et mon collègue
          de la visserie. Le directeur d'usine quant à lui, voyageait entre 3
          sites Geodis Alstom (ce qui m’obligeais à être autonome du fait que je
          ne pouvais pas toujours demander à mon supérieur comment faire ou quoi
          faire.)
        </p>
      </div>
      <div className="underlinePro"></div>
      <div className="boehliProd">
        <h3>Boehli | Technicien de production</h3>
        <h4>2019</h4>
        <p>
          À la suite de soucis de santé et différentes hospitalisations je n'ai
          pas pu travailler pendant une certaine période mais Boehli m’a offert
          une place de technicien de production (après mes différentes
          hospitalisations) afin de pouvoir me remettre dans un rythme de
          travail et pouvoir préparer mon diplôme "BAC PRO TMSEC".
        </p>
      </div>
      <button className="btn m1" onClick={() => seenNextExpPro()}>
        Afficher le suite
      </button>
      <div id="nextSeenExpPro">
        <div className="underlinePro"></div>=
        <div className="alpi">
          <h3>Alpi | Technicien de production</h3>
          <h4>2019-2020</h4>
          <p>
            Ayant du mal pour le travail de nuit après mes hospitalisations j'ai
            dû quitter Boehli pour faire de la production chez Alpi jusqu’à
            commencer mon BAC PRO TMSEC. Une mission d'intérim qui était intense
            et dans laquelle je devais avoir une cadence à tenir tous les jours
            avec un travail de minutie.
          </p>
        </div>
        <div className="underlinePro"></div>
        <div className="froidVeltz">
          <h3>Froid Veltz | Stage TMSEC</h3>
          <h4>2020-2021</h4>
          <p>
            Durant mon BAC PRO TMSEC j'ai eu deux périodes de 5 semaines de
            stage à réaliser, je les ai faites dans une petite entreprise, Froid
            Veltz où j'ai pu comprendre tout l'intérêt du travail d'équipe et de
            la communication, que cela soit pour installer des climatisations ou
            des chambres froides, mais le plus important également était de
            travailler en propreté étant donné que nous travaillions dans les
            maisons privatives ou bien dans des restaurants ou l'hygiène doit
            être irréprochable.
          </p>
        </div>
        <div className="underlinePro"></div>
        <div className="ibag">
          <h3>Ibag | Apprentis technicien de maintenance</h3>
          <h4>2020-2021</h4>
          <p>
            Une alternance que j'ai effectué durant la première année de mon BTS
            MS, j'ai décidé de démissionner après quasiment un an car le domaine
            m'intéressait de moins en moins et cela faisait maintenant 15 mois
            que je m’étais lancé dans le développement web, je voulais continuer
            dans ce domaine, pouvoir me concentrer sur ce sujet et dans mes
            formations.
          </p>
          <button className="btn m1" onClick={() => seenNextIbag()}>
            Lire la suite
          </button>
          <p id="nextIbag">
            J'ai eu l'occasion d'avoir un projet à réaliser où j'ai dû établir
            une liste de matériel pour programmer des automates et faire une 3D
            de base. J'ai dû installer un banc d'essai pour les broches
            électro-mécanique, j'ai pu mettre en place tout l'électrique,
            l’hydraulique et les pneumatiques du banc et réaliser tous les
            schémas pour une future maintenance. J'ai travaillé en autonomie sur
            ce projet mais j'ai pu aussi faire appel à l’usineur et modélisateur
            3D de l'entreprise pour me conseiller et m'aider sur des points que
            je ne savais pas réaliser avant qu'ils ne me donnent leurs conseils.
          </p>
        </div>
        <div className="underlinePro"></div>
        <div className="oneforall">
          <h3>One4All | Bénevolle Développeur WEB</h3>
          <h4>2022</h4>
          <p>
            Un peu avant de démissionner de chez Ibag j'ai décidé de tenter ma
            chance chez OpenClassRooms pour faire un BAC+2 développeur web, j'ai
            donc commencé à rechercher une entreprise afin de faire ce diplôme
            en apprentissage. J'ai réalisé des tests avec d'autres personnes
            chez ONE4ALL pour pouvoir avoir ma place là-bas nous étions 6
            retenus dont 2 qui souhaitaient réaliser leur apprentissage chez
            eux.
          </p>
          <button className="btn m1" onClick={() => seenNextOneforAll()}>
            Lire la suite
          </button>
          <p id="nextOneforAll">
            Mais après plus de 2 mois de bénévolat nous n’avions toujours pas de
            nouvelles pour notre contrat d'apprentissage que l'on nous avait
            promis c'est pour cela que je me suis mis à rechercher une autre
            entreprise. J'ai pu travailler en autonomie tout en travaillant en
            équipe. J'ai eu de la chance, l'équipe était constituée de personnes
            de bons conseils qui m'ont énormément appris dans mon apprentissage
            de JS et de React c'est à ce moment-là qu’un déclic s'est fait chez
            moi : j'ai commencé à vraiment comprendre le langage JS et () j'l'ai
            (commencé à) trouver (ça) "facile".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professionel;
