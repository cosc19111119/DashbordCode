
import './App.css';
import Navbar from './conponents/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboar from './pages/dashboard/Dashboar';
import Test from './conponents/Test';
import DashboardMain from './pages/dashboard/DashboardMain';
import StatCardA from './conponents/StatCard/StatCardA';
import MenuPage from './pages/dashboard/MenuPage';
import PosPage from './pages/dashboard/PosPage';
import SocialMediaPage from './pages/dashboard/SocialMediaPage';
import FeedBacks from './pages/FeedBacks';
import AnalysisPage from './pages/dashboard/AnalysisPage';
import Model1 from './conponents/Models/Model1';
import SideBar1 from './conponents/SideBar1';
import { useState } from 'react';
import SidBar from './conponents/SidBar';
function App() {  

  return (
    <div className="App">


     
      
<Navbar />
      <Routes>

        <Route path="" element={<Dashboar />} >
          <Route path="/MenuPage" element={<MenuPage />} />
          <Route path="/DashboardMain" element={<DashboardMain />} />
          <Route path="/PosPage" element={<PosPage />} />
          <Route path='/SocialMediaPage' element={<SocialMediaPage />} />
          <Route path='/FeedBacks' element={<FeedBacks />} />
          <Route path='/Analysis' element={<AnalysisPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
