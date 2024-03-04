import React from "react";
import "./Categories.css";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categoriesList = [
    "Craft Fair",
    "Zine Fest",
    "Art Book Fair",
    "Maker Fest",
    "DIY Market",
    "Last One",
  ];
  return (
    <div className='categories'>
      <h1 className='categories-title'>Categories</h1>
      <div className='category-cards'>
        {categoriesList.map((name, i) => (
          <CategoryCard key={i} category={name} />
        ))}
        {/* <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard /> */}
      </div>
    </div>
  );
};

export default Categories;
