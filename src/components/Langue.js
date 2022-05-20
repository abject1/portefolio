import React from "react";

const Langue = () => {
  return (
    <div className="langue">
      <h1>Langue</h1>
      <div className="francais">
        <h2>Francais</h2>
        <div className="underlineTitleFrancais"></div>
        <div className="star-container">
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
        </div>
      </div>
      <div className="allemand">
        <h2>Allemand</h2>
        <div className="underlineTitleAllemand"></div>
        <div className="star-container">
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <div className="anglais">
        <h2>Anglais</h2>
        <div className="underlineTitleAnglais"></div>
        <div className="star-container">
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default Langue;
