import React from 'react';
import useHeroes from '../hooks/useHeroes';
import HeroItem from './HeroItem';

const HeroList: React.FC = () => {
  const { heroes, loading, error, setHeroes } = useHeroes();

  const toggleAvailability = (id: number) => {
    setHeroes(prevHeroes =>
      prevHeroes.map(hero =>
        hero.id === id ? { ...hero, available: !hero.available } : hero
      )
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul 
      style={{
        listStyleType: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
      }}
    >
      {heroes.map((hero, index) => (
        <HeroItem 
          key={hero.id} 
          hero={hero} 
          toggleAvailability={toggleAvailability} 
          index={index + 1} 
        />
      ))}
    </ul>
  );
};

export default HeroList;
