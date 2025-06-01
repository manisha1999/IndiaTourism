import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./TouristVisitData.css";

type VisitRecord = {
  states: string;
  _2018___domestic_tourist_visits: number;
  _2018___foreign_tourist_visits: number;
};

type ShareRecord = {
  state_ut: string;
  percentage_share___domestic: number;
  percentage_share___foreign: number;
};

type VisitData = {
  state: string;
  domestic: number;
  foreign: number;
};

type ShareData = {
  state: string;
  domesticShare: number;
  foreignShare: number;
};

const TourismChart: React.FC = () => {
  const [visitData, setVisitData] = useState<VisitData[]>([]);
  const [shareData, setShareData] = useState<ShareData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTourismData = async () => {
      try {
        const response = await fetch(
          "https://api.data.gov.in/resource/18ec200b-fb1a-4d19-bc57-15d5c2f115c3?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
        );
        if (!response.ok) throw new Error("Failed to fetch visit data");

        const json = await response.json();
        const transformed = json.records.map((item: VisitRecord) => ({
          state: item.states,
          domestic: item._2018___domestic_tourist_visits,
          foreign: item._2018___foreign_tourist_visits,
        }));
        setVisitData(transformed);
      } catch (err: any) {
        setError(err.message || "Error loading visit data");
      }
    };

    const fetchTourismShareData = async () => {
      try {
        const response = await fetch(
          "https://api.data.gov.in/resource/f6ddca2f-3489-4207-8c1d-f7f547e5100f?api-key=579b464db66ec23bdd00000187be223c77ce410b739fa09b8fa2d650&format=json"
        );
        if (!response.ok) throw new Error("Failed to fetch share data");

        const json = await response.json();
        const transformed = json.records.map((item: ShareRecord) => ({
          state: item.state_ut,
          domesticShare: item.percentage_share___domestic,
          foreignShare: item.percentage_share___foreign,
        }));
        setShareData(transformed);
      } catch (err: any) {
        setError(err.message || "Error loading share data");
      }
    };

    fetchTourismData();
    fetchTourismShareData();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <div className="tourism-chart-container">
        <h2 className="tourism-chart-title">State-wise Tourist Visits in 2018</h2>
        <p className="tourism-chart-description">
          This bar chart presents the number of domestic and foreign tourist visits across various Indian states in the year 2018.
          The data is sourced from the Ministry of Tourism and reflects the popularity of each state among travelers both from within India and abroad.
        </p>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={visitData} margin={{ top: 30, right: 30, left: 0, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="state" angle={-45} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="domestic" fill="#8884d8" name="Domestic Tourists" />
            <Bar dataKey="foreign" fill="#82ca9d" name="Foreign Tourists" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="tourism-chart-container">
        <h2 className="tourism-chart-title">State/UT-wise Percentage Share of Tourist Visits (2018)</h2>
        <p className="tourism-chart-description">
          This chart illustrates the percentage share of domestic and foreign tourists across Indian states and union territories in 2018. 
          The data helps in identifying popular destinations based on their tourism share.
        </p>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={shareData} margin={{ top: 30, right: 30, left: 0, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="state" angle={-45} textAnchor="end" interval={0} />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Bar dataKey="domesticShare" fill="#8884d8" name="Domestic %" />
            <Bar dataKey="foreignShare" fill="#82ca9d" name="Foreign %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TourismChart;
