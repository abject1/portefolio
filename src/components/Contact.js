import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="reseaux">
        <h2>Mes reseaux sociaux</h2>
        <div className="twitter">
          <h4>
            <a
              href="https://twitter.com/abject_gameur"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../assets/twitter.png" alt="twitter" /> Twitter
            </a>
          </h4>
        </div>
        <div className="linkedin">
          <h4>
            <a
              href="https://www.linkedin.com/in/lucas-wurtz-a3aa7721b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../assets/linkedin.png" alt="linkedin" /> Linkedin
            </a>
          </h4>
        </div>
        <div className="github">
          <h4>
            <a
              href="https://github.com/abject1"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../assets/github.png" alt="github" /> GitHub
            </a>
          </h4>
        </div>
        <div className="discord">
          <h4>
            <a
              href="https://discord.gg/KQDcjZGxtq"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../assets/discorde.png" alt="discord" /> Discord
            </a>
          </h4>
        </div>
      </div>
      {/* <div className="formulaire">
        <h2>Formulaire de contact</h2>
        <input type="text" placeholder="Prénom" id="firstName" />
        <input type="text" placeholder="Nom" id="name" />
        <input type="email" placeholder="Votre Email" id="mail" />
        <textarea
          name="message"
          id="message"
          cols="25"
          rows="3"
          placeholder="Votre message"
        ></textarea>
        <input type="submit" className="btn" id="btn-submit" />
      </div> */}
    </div>
  );
};

export default Contact;
