import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Plants from './components/Plants';
import AddPlant from './components/AddPlant';
import CareSchedule from './components/CareSchedule';
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='main-content'>  
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/myplants' element={<Plants/>}></Route>
          <Route path='/addplant' element={<AddPlant/>}></Route>
          <Route path='/careschedule' element={<CareSchedule/>}></Route>
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
