import { useState } from 'react';
import './Collapse.css';

// ASSETS
import ArrowDown from '../../assets/arrow-down.png'; // Flèche vers le bas
import ArrowUp from '../../assets/arrow-up.png'; // Flèche vers le haut

function Collapse({ data }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCollapse = (index) => {
    const currentIndex = openIndexes.indexOf(index);
    const newOpenIndexes = [...openIndexes];

    if (currentIndex === -1) {
      newOpenIndexes.push(index);
    } else {
      newOpenIndexes.splice(currentIndex, 1);
    }

    setOpenIndexes(newOpenIndexes);
  };

  const numCollapses = data.length;
  const containerClass = numCollapses === 2 ? 'CollapseHomeTwo' : 'CollapseHome';

  return (
    <div className={containerClass}>
      {data.map((collapse, index) => (
        <div className="ContCollapse" key={index}>
          <div className="TittleCont" onClick={() => toggleCollapse(index)}>
            <h3 className="TittleCollapse">{collapse.title}</h3>

            {/* Utilisation de la bonne flèche avec rotation */}
            <img
              src={openIndexes.includes(index) ? ArrowDown : ArrowUp} // Flèche par défaut vers le haut (caché)
              alt="Arrow"
              className={`arrow ${openIndexes.includes(index) ? 'rotated' : ''}`} // Ajoute la classe 'rotated' quand le texte est ouvert
            />
          </div>

          {/* Gestion des classes pour l'animation du texte */}
          <div className={`TextCollapse ${openIndexes.includes(index) ? 'open' : 'closed'}`}>
            {collapse.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapse;
