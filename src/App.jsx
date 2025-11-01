import React from 'react';
import Header from './Headers/Header';
import Home from './Pages/Home';
import Category from './Pages/PageComponenet/Category';
import DayDealProducts from './Pages/PageComponenet/DayDealProducts';
import Decoretion from './Pages/PageComponenet/Decoretion';
import Newarrival from './Pages/PageComponenet/Newarrival';
import Decoration1 from './Pages/PageComponenet/Decoration1';
import Facility from './Pages/PageComponenet/Facility';
import Category1 from './Pages/PageComponenet/Category1';
import LatestBlog from './Pages/PageComponenet/LatestBlog';
import Footer from './Pages/PageComponenet/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Category/>
      <DayDealProducts/>
      <Decoretion/>
      <Newarrival/>
      <Decoration1/>
      <Facility/>
      <Category1/>
      <LatestBlog/>
      <Footer/>

    </div>
  );
};

export default App;