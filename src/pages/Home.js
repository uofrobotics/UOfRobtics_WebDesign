import React from 'react';
import '../components/Components_css/App.css';
import Cards from '../components/Cards';
import Land_pg from '../components/Land_pg';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <Land_pg />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
