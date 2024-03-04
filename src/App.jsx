import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import RecentActivty from "./Components/RecentActivty";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <RecentActivty />
      <div className='line'></div>
      <Categories />
      <Footer />
    </>
  );
}

export default App;
