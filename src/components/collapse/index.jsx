import React, { useState } from 'react';
import CollapseDown from "../../assets/collapseDown.svg";
import CollapseUp from "../../assets/collapseUp.svg";
import Github from "../../assets/github.png";

function Collapse ({ title, appliLink, imageCollapse, githubLink, description,langage, consigne }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='all_collapse'>
      <div className="collapse" onClick={() => setIsActive(!isActive)}>
        <h1 className="collapse_title">{title}</h1>
        <div>{isActive ?<img src={CollapseUp} alt="arrowDown" className='arrow_down'/> 
        : <img src={CollapseDown} alt="arrowDown" className='arrow_down'/>}</div>
      </div>
      {isActive && 
      <div className="collapse_text">
          <h3 className="collapse__description">{description}</h3>
          <div className='image_collapse'>
          <a href={appliLink}>
          <img src={imageCollapse} className='photo_collapse' alt='photo_collapse'/>
          </a>
          <a href={githubLink}>
          <img src={Github} className='icone_github' alt='photo_collapse'/>
          </a>
          </div>
          <p className='collapse_langage'>Environnement et/ou language : {langage}</p>
            <a href={consigne} className='read_me'>Consignes du projet</a>
        </div>}
    </div>
  );
};

export default Collapse;

