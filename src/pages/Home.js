import React from 'react';
import '../components/Components_css/App.css';
import Cards from '../components/Cards';
import Landpg from '../components/Landpg';
import Footer from '../components/footer';


function Home() {
  return (
    <div>
      <Landpg />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
