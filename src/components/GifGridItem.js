import React from 'react';

const GifGridItem = ({title, url}) => {
  return ( 
    <div className='card'>
      <img className='animate__animated animate__fadeInLeftBig' src={url} alt={title} />
      <p>{title}</p>
    </div> 
  );
}
 
export default GifGridItem;