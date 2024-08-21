import React from 'react';
import './HeroItem.css';

interface Hero {
  id: number;
  name: string;
  available: boolean;
}

interface HeroItemProps {
  hero: Hero;
  toggleAvailability: (id: number) => void;
  index: number;
}

const HeroItem: React.FC<HeroItemProps> = ({ hero, toggleAvailability, index }) => {
  return (
    <li
      onClick={() => toggleAvailability(hero.id)}
      className={`hero-item ${hero.available ? 'available' : 'unavailable'}`}
    >
      {index}. {hero.name} - {hero.available ? 'Available' : 'Unavailable'}
    </li>
  );
};

export default HeroItem;
