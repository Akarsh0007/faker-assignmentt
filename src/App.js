import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CarUserList from './pages/CarUserList';
import UserCountryChart from './pages/UserCountryChart';
import ModelMakerChart from './pages/ModelMakerChart';
import VehicleAgeUserChart from './pages/VehicleAgeUserChart';
import UsersByAgeChart from './pages/UserByAgeChart';

function App() {
  return (
    <div className="App">
      <Router >
        <div className="main-container">
            <Header />
            <Routes>
              <Route exact path='/' element={<CarUserList/>} />
              <Route exact path={`/chart/bar/user-country`} element={<UserCountryChart />} />
              <Route exact path={`/chart/pie/model-maker`} element={<ModelMakerChart />} />
              <Route exact path={`/chart/pie/vehicle-age`} element={<VehicleAgeUserChart />} />
              <Route exact path={`/chart/bar/user-age`} element={<UsersByAgeChart />} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
