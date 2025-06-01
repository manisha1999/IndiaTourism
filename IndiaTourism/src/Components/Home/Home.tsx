
import { useNavigate } from 'react-router-dom';

// import TourismChart from '../TouristVisitData/TouristVisitData';

import './Home.css'





const states = [
  { name: "Andhra Pradesh", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Arunachal Pradesh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybRewyl10X_JLtYE4P_F80FZmN9aXtswnGg&s" },
  { name: "Assam", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Bihar", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Chhattisgarh", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Goa", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Gujarat", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Haryana", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Himachal Pradesh", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Jharkhand", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Karnataka", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Kerala", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Madhya Pradesh", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Maharashtra", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Manipur", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Meghalaya", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Mizoram", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Nagaland", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Odisha", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Punjab", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Rajasthan", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Sikkim", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Tamil Nadu", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Telangana", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Tripura", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Uttar Pradesh", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "Uttarakhand", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" },
  { name: "West Bengal", image: "https://t4.ftcdn.net/jpg/11/71/76/93/240_F_1171769333_kZir9yE6Avx72g6aLF39HXcnS8D29WsI.jpg" }
];
const Home: React.FC = () => {
    const navigate = useNavigate();
  
    const goToCategory = (stateName: string) => {
      navigate(`/explore/${stateName}`);
    };
  
    return (
        <>
       
      <div className='main_body'>
        
        <h2>Explore States of India</h2>
        <div className="states">
          {states.map((state) => (
            <div
              className="state"
              key={state.name}
              onClick={() => goToCategory(state.name)}
            >
              <h4>{state.name}</h4>
              <img src={state.image} alt={state.name} />
            </div>
          ))}
        </div>
        
      </div>

     
     
      </>
    );
  };
  
export default Home;