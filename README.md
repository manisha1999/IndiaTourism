🌏 Incredible India Explorer
A React + Node.js-based full-stack web application to explore Indian states, their rich cultural heritage, tourist destinations, festivals, and traditional products.

🧭 About the Project
Incredible India Explorer is a cultural tourism app designed to: - Explore detailed state-wise information (climate, capital, history, best visiting time) - Discover major tourist attractions and festivals - Learn about local handicrafts and products - Read and submit ratings & reviews  It combines data from a public tourism API and a custom Node.js backend.

🖼️ Features
- 🌐 Browse Indian states & view tourist data - 📅 See festivals celebrated in each state - 🛍️ Explore regional products with images & descriptions - ⭐ Rate and review experiences - 🔍 Search-friendly UI with clean design

⚙️ Tech Stack
Frontend: - React + TypeScript - CSS Modules
Backend: - Node.js + Express - RESTful API
APIs & Services: - World Tourist Attractions API (via RapidAPI) - Local Express API for festivals and reviews

🚀 Getting Started
1. Clone the repository
git clone https://github.com/your-username/incredible-india-explorer.git cd incredible-india-explorer
🧩 Project Structure
/IndiaTourism       => React frontend (Explore, FestivalList, RatingReviews) 
/backend        => Node.js Express backend (Festivals API, Reviews API) /public        => Static assets
🛠️ Frontend Setup (React)
cd IndiaTourism
npm i
npm run dev
Make sure to update your .env file with: REACT_APP_RAPIDAPI_KEY=your_rapidapi_key

🔧 Backend Setup (Node.js)

cd backend
node index.js

Backend will run on http://localhost:5000/  
Make sure you have a festivals.json or connected database in the backend to serve the /api/festivals route.

🧪 API Reference
📍 Get State Data: GET https://world-tourist-attractions-api.p.rapidapi.com/state?state=gujarat
🎉 Get Festivals by State: GET http://localhost:5000/api/festivals?state=Punjab
📝 Customization
🌐 To add new states, update your states.json or wherever you're storing metadata. 🎭 To add festivals, edit backend /data/festivals.json or connect to MongoDB.
🧠 Future Features
- Admin dashboard for content management - Add authentication for reviews - Search & filtering by region, month, etc. 
📸 Screenshots
Insert screenshots or demo GIFs here ![Home](screenshots/home.png) ![State Detail](screenshots/state-detail.png)


📄 License
This project is licensed under the MIT License.
🙌 Acknowledgements
- RapidAPI Tourist API - India Tourism Data (data.gov.in)
