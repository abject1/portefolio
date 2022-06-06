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
          Une première expérience professionel en temps qu'apprentis technicien
          de maintenance pendant que j'ai réaliser mon BAC PRO Electrotechnique.
          Une expérience qui ma permis d'apprendre a travailler en équipe mais
          également a travailler en autonomie. J'ai beaucoup apris a trouver moi
          même le travail a faire et de juger le quel des travaux  est plus important a
          être réaliser en premier, mais sa ma également apris a apprendre de
          génerer une maintenance préventive au quotidien et d'être sur que les
          machines qui démarre le lundi tiendrons le coup jusqu'au vendredi.
        </p>
        <button className="btn m1" onClick={() => seenNextBoehliApp()}>
          Lire la suite
        </button>
        <p id="nextBoehliApp">
          J'ai également eux l'occasion de réaliser de la maintenance curative
          et a assistée a des réunion de mise en place de maintenance
          curative afin de prévoir le délais qu'il nous faudras avec une marge
          suplémentaire en cas de soucit pendant la maintenance. J'ai également
          eux la chance d'assister a l'aggrandisement de l'usine et la mise en
          place d'équipements neuf et a la mise en ligne de nouvelle ligne de
          production. j'ai également beaucoup assister au directeur d'usine et a
          l'automatisien pour faire de l'automatisme de machine que sa soit pour
          améliorer les programmes ou réaliser des nouveaux programmes pour des
          machines qui n'etais pas automatiser au part avant. J'ai également put
          mettre en place tous le système de vidéo surveillance du magasin
          d'usine et du musée qui a était mit en place lors de l'aggrandisement
          de l'usine.
        </p>
      </div>
      <div className="underlinePro"></div>
      <div className="geodis">
        <h3>Geodis | Magasiniée</h3>
        <h4>2018-2019</h4>
        <p>
          Premier réel job pour moi en tant qu'intérimaire, j'ai apris a gérer
          un magasin a faire en sorte que mon stock ne soit jamais vide et de
          toujours avoir a disposition le matériel dont les ouvriers de Alstom
          avait bessoin. Parce que oui géodis est située sur le site Alstom et
          ma tache principale etait de préparer les commandes afin de les livrées
          le matin dans les différents bâtiments et les différents postes. J'ai du
          être 100% autonome nous étions deux livreur moi qui s'occuper du
          matériel premier et mon collegue de la viserie, le directeur du site
          voyager entre 3 sites Geodis Alstom ce qui fessait que je devait être
          autonome et ne pouvais pas toujours demander a mon supérieur comment
          faire ou quoi faire.
        </p>
      </div>
      <div className="underlinePro"></div>
      <div className="boehliProd">
        <h3>Boehli | Technicien de production</h3>
        <h4>2019</h4>
        <p>
          suite a des soucit de santé et différente hospitalisation je n'est pas
          put travailler pendnat une certaine période et boehli ma offert une
          place de technicien de production apres mes hospitalisations afin de
          pouvoir me remttre dans un rythme de travaille et pouvoir preparer mes
          arrière pour pouvoir recommencer mes etudes "BAC PRO TMSEC".
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
            Ayant du mal pour le travail de nuit apres mes hospitalisation j'ai
            quitter boehli pour faire de la production chez Alpi jusqu'a
            commencer mon BAC PRO TMSEC, une mission d'interimaire qui etait intense
            et dans la quel je devais avoir une cadence a tenir tous les jours
            avec un travail de minusie en même temps.
          </p>
        </div>
        <div className="underlinePro"></div>
        <div className="froidVeltz">
          <h3>Froid Veltz | Stage TMSEC</h3>
          <h4>2020-2021</h4>
          <p>
            Durant mon BAC PRO TMSEC j'ai eux deux périodes de 5 semaines de
            stage a réaliser, je les est réaliser dans une petite entreprise
            Froid Veltz ou j'ai put comprendre tous l'intérer du travail
            d'équipe et de la communication dans une équipe que sa soit pour
            installer des clims et des chambres froides, mais le plus important
            également et de travailler en propretait etant donnée que nous
            travaillons dans les maisons personnel de propriétaire ou bien dans
            des restaurant ou l'hygiène est très importante.
          </p>
        </div>
        <div className="underlinePro"></div>
        <div className="ibag">
          <h3>Ibag | Apprentis technicien de maintenance</h3>
          <h4>2020-2021</h4>
          <p>
            Une alternance que j'ai effectuer durant la première année de mon
            BTS MS, j'ai décider de démissioner apres casiment un an car le
            domaine m'interesse de moin en moin et cela fessait maintenant 15
            mois que je mettais lancer dans le développement web et je voulais
            pérsister dans ce domaine pouvoir me concentrée dans le domaine et
            dans mes formations.
          </p>
          <button className="btn m1" onClick={() => seenNextIbag()}>
            Lire la suite
          </button>
          <p id="nextIbag">
            J'ai eux l'occasion d'avoir un projet a réaliser ou j'ai du établire
            une liste de matériel programmer des automate faire une 3D de base.
            J'ai du installer un banc d'essaie pour les broches électro-mécanique,
            j'ai put mettre en place tous l'electrique, hydraulique et
            pneumatique du banc et réaliser tous les shéma pour une future
            maintenance. J'ai travailler en autonomie sur ce projet mais j'ai
            put faire appel au usineur ou modélisateur 3D de l'entreprise pour
            me conseiller ou m'aider sur des point que je ne savais réaliser
            avant qu'ils me donnent leurs conseil.
          </p>
        </div>
        <div className="underlinePro"></div>
        <div className="oneforall">
          <h3>One4All | Bénevolle Développeur WEB</h3>
          <h4>2022</h4>
          <p>
            Un peu avant de démisionner de chez Ibag j'ai décider de tenter ma
            chance chez OpenClassRooms pour faire un BAC+2 développeur web, j'ai
            donc commencer a rechercher une entreprise afin de faire ce diplome
            en apprentissage. J'ai réaliser des test avec d'autres personnes
            chez ONE4ALL pour pouvoir avoir ma place la bas nous étions 6
            retenue dont deux qui souhaiter réaliser leur apprentissage chez
            eux.
          </p>
          <button className="btn m1" onClick={() => seenNextOneforAll()}>
            Lire la suite
          </button>
          <p id="nextOneforAll">
            Hors après plus de 2 mois de bénevolat nous avont toujours pas de
            nouvelle pour notre contrat d'apprentissage que l'on nous avais
            promit c'est pour cella que je me suis mit a rechercher une autre
            entreprise. J'ai put travailler en autonomie tous en travaillant en
            équipe. J'ai eux la chance que l'équipe etait constituer de
            personnes en hors qui mon énormément apris dans mon apprentissage de
            JS et de React c'est a ce moment la que un déclique c'est fait chez
            moi et ou j'ai commencer a vraiment comprendre le language JS et ou
            j'ai commencer a trouvée sa "facile".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Professionel;
