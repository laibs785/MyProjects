import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header'; 
import ExploreMenu from '../../components/exploreMenu/ExploreMenu';
import { FoodDisplay } from '../../components/foodDisplay/FoodDisplay';
import AppDownload from '../../components/appDownload/AppDownload';


export const Home = () => {
  let [category,setCategory]=useState("all");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>

    </div>
  )
}
