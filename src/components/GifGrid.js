import React from "react";
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { loading, data } = useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    { loading ? 'Cargando....' : 
    <>
    
    <div className="card-grid">
        {data.length > 0 &&  
          data.map(dat => (
            <GifGridItem key={dat.id} {...dat} />
          ))
        }
    </div>
    </>}
    </>
  );
};

export default GifGrid;
