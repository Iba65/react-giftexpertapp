import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [title] = useState('GifExpertApp');
  const [categories, setCategories] = useState(['cats']);

  /*const handleAdd = (valor) => {
    setCategories([
      ...categories,
      valor
    ]);
    // otra manera de hacerlo
    //setCategories( cat => [...cat, valor]);
  }*/
  return ( 
    <>
      <h2>{title}</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
        {categories.map(cat => (
          <GifGrid key={cat} category={cat} />
        ))}
    </>
  );
}
 
export default GifExpertApp;
