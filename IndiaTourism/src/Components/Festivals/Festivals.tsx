import { useEffect, useState } from 'react';
import './Festival.css';

interface Festival {
  name: string;
  month: string;
  description: string;
}

interface FestivalListProps {
  state: string;  // The name of the state to fetch festivals for
}

const FestivalList = ({ state }: FestivalListProps) => {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFestivals = async () => {
      if (!state) return;

      try {
        const res = await fetch(`http://localhost:5000/api/festivals?state=${encodeURIComponent(state)}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Something went wrong');
        }

        setFestivals(data.festivals);
        setError('');
      } catch (err: any) {
        setFestivals([]);
        setError(err.message);
      }
    };

    fetchFestivals();
  }, [state]);

  return (
    <div className="festival-container">
      <h2 className="festival-title">Cultural Festivals in {state}</h2>

      {error && <p className="festival-error">{error}</p>}

      {festivals.length > 0 && (
        <ul className="festival-list">
          {festivals.map((festival, index) => (
            <li key={index} className="festival-item">
              <h3>{festival.name}</h3>
              <p><strong>Month:</strong> {festival.month}</p>
              <p>{festival.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FestivalList;
