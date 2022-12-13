import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import ComparePage from './components/ComparePage';
import ProductPage from './components/ProductPage';
import { Routes } from 'react-router-dom/dist';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState();

  const [compare, setCompare] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data);
      // console.log(response.data);
    })
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        {/* Sidebar */}
        <Sidebar compare={compare}/>

        <div className='app__main'>
          <Header />


          <Routes>
            <Route path="/compare" element={<ComparePage compare={compare} setCompare={setCompare}/>} exact />
            <Route path="/" element={<ProductPage data={data} compare={compare} setCompare={setCompare}/>} exact />
          </Routes>


        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
