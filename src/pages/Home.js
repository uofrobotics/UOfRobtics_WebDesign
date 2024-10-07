import React from 'react';
import '../components/Components_css/App.css';
import Cards from '../components/Cards';
import Landpg from '../components/Landpg';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <Landpg />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
