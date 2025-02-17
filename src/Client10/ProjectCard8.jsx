import React from 'react';
import './Layout8.css'

const ProjectCard = ({ imageUrl, title, subtitle, id, style, titleClass, subtitleClass }) => {
  return (
    <div className="project-card" style={style}>
      <div className="image-container">
        <img src={imageUrl} alt={title} className="project-image" id={id} />
      </div>
      <div className="text-container">
        <div className={`title ${titleClass}`}>{title}</div>
        <div className={`subtitle ${subtitleClass}`}>{subtitle}</div>
      </div>
    </div>
  );
};

export default ProjectCard;