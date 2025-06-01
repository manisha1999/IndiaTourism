import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Explore.css';
import RatingReviews from "../RatingReviews/RatingReviews";
import FestivalList from "../Festivals/Festivals";

const RAPID_KEY = "731f3b5217msh4eb3df6ad680926p169b14jsn436752f9839e";

type TouristAttraction = {
  name: string;
  info: string;
  images: string;
  location: string;
};

type Product = {
  name: string;
  description: string;
  image: string;
};

type ExploreData = {
  about: string;
  capital: string;
  climate: string;
  history: string;
  id: string;
  img: string[];
  name: string;
  products: Product[];
  time: string;
  tourist: TouristAttraction[];
};

const Explore: React.FC = () => {
  const { stateName } = useParams<{ stateName: string }>();
  const [data, setData] = useState<ExploreData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    if (!stateName) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch state tourism data
        const response = await fetch(
          `https://world-tourist-attractions-api.p.rapidapi.com/state?state=${stateName.toLowerCase()}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": RAPID_KEY,
              "X-RapidAPI-Host": "world-tourist-attractions-api.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching data for ${stateName}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
        setError(null);

      } catch (err: any) {
        setError(err.message || "Failed to load data");
        setData(null);
        
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [stateName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return <p>No data found for {stateName}</p>;

  return (
    <div className="explore-container">
      <h1>{data.name}</h1>

      {/* Images gallery */}
      <div className="explore-gallery">

        {data.img.map((url, idx) =>
          url ? (
            <img key={idx} src={url} alt={`${data.name} image ${idx + 1}`} width={250} />
          ) : null
        )}
      </div>

      <section>
        <h2>About</h2>
        <p>{data.about}</p>
      </section>

      <section>
        <h2>Capital</h2>
        <p>{data.capital}</p>
      </section>

      <section>
        <h2>Climate</h2>
        <p>{data.climate}</p>
      </section>

      <section>
        <h2>History</h2>
        <p>{data.history}</p>
      </section>

      <section>
        <h2>Best Time to Visit</h2>
        <p>{data.time}</p>
      </section>

      <section>
        <h2>Tourist Attractions</h2>
        <ul className="tourist-list">
          {data.tourist.map((place) => (
            <li key={place.name} style={{ marginBottom: 20 }}>
              <h3>{place.name}</h3>
              <img src={place.images} alt={place.name} width={300} />
              <p>{place.info}</p>
              <a href={place.location} target="_blank" rel="noreferrer">
                View Location on Map
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Festivals</h2>
       {stateName && <FestivalList state={stateName} />}
      </section>

      <section>
        <h2>Products</h2>
        <ul className="products-list" style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
          {data.products.map((product) => (
            <li key={product.name} style={{ width: 200, border: "1px solid #ddd", padding: 10 }}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} width="100%" />
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
      {stateName && <RatingReviews state={stateName} />}
      </section>
    </div>
  );
};

export default Explore;
