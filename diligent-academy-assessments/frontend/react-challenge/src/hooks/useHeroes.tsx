import { useState, useEffect } from 'react';
import { callApi } from '../call-api';



interface Hero {
  id: number;
  name: string;
  available: boolean;
}

const useHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const data = await callApi<Hero[]>('heroes');
        setHeroes(data);
      } catch (err) {
        setError('Failed to fetch heroes');
      } finally {
        setLoading(false);
      }
    };

    getHeroes();
  }, []);

  return { heroes, loading, error, setHeroes };
};

export default useHeroes;
