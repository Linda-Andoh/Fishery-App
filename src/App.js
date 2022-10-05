import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Species from './pages/Species';

function App() {

  const [fishList, setFishList] =useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://www.fishwatch.gov/api/species')
      const data = await response.json();
      setFishList(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main fishes={fishList} />} />
        <Route path="/species/:fishName" element={<Species />} />
      </Routes>
   
    </div>
  );
}

export default App;
