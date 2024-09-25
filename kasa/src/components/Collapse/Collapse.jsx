import { useState } from 'react';
import './Collapse.css';

// ASSETS
import ArrowDown from '../../assets/arrow-down.png'; // Flèche vers le bas
import ArrowUp from '../../assets/arrow-up.png';     // Flèche vers le haut

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
            {/* Logique des flèches : flèche vers le bas si ouvert, vers le haut si fermé */}
            <img
              src={openIndexes.includes(index) ? ArrowUp : ArrowDown}  // Inverser ici
              alt="Arrow"
              className={`arrow ${openIndexes.includes(index) ? 'rotated' : ''}`}
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
