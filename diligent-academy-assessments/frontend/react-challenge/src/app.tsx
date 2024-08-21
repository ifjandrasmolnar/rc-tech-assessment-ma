import React from 'react';
import HeroList from './components/HeroList';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1 style={{ paddingLeft: '10px'}}>App</h1>
      <h3 style={{ paddingLeft: '10px'}}>Heroes</h3>
      <HeroList />
    </div>
  );
};

export default App;

