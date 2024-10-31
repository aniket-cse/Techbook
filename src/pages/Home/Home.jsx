import React, { useState } from 'react';
import AppDownload from '../../components/AppDownload/AppDownload';
import BookType from '../../components/ExploreBookType/BookType';
import { BookDisplay } from '../../components/BookDisplay/BookDisplay';
import Header from '../../components/Header/Header';
import './Home.css';


const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
    <Header/>
    <BookType category={category} setCategory={setCategory}/>
    <BookDisplay category={category} />
    <AppDownload/>
    </div>
  )
}

export default Home