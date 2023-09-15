import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Menu from './pages/Menu'
import Inventory from './pages/Inventory'
import SalesHistory from './pages/SalesHistory'
import Settings from './pages/Settings'
import Navbar from './components/Navbar';
import Navbars from './components/Navbar-staff';
import Login from './pages/Login'
import { AuthContext } from './services/AuthContext';

import { useContext } from 'react';
import './App.css';


function App() {

  const { isAuthenticated, user } = useContext(AuthContext);
 
  return (
    <div className="relative flex">
   
        

          <Navbar/>

     
       
       <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

    
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/saleshistory" element={<SalesHistory />} />
            <Route path="/settings" element={<Settings />} />
      
        
            <Route path="/settings" element={<Settings />} />
            <Route path="/menu" element={<Menu />} />
       
       
      </Routes>
   
    </div>
  );
}


export default App;
