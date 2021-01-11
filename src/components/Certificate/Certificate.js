import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import ica from '../../assets/img/ica.png'
import oveja from '../../assets/img/oveja.jpg'
import vaca from '../../assets/img/vaca.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={ica} alt="" onDragStart={handleDragStart} className="imgcarrusel" />,
  <img src={oveja} alt="" onDragStart={handleDragStart} className="imgcarrusel" />,
  <img src={vaca} alt="" onDragStart={handleDragStart} className="imgcarrusel" />,
  <img src={ica} alt="" onDragStart={handleDragStart} className="imgcarrusel" />,
  <img src={oveja} alt="" onDragStart={handleDragStart} className="imgcarrusel" />,
  <img src={vaca} alt="" onDragStart={handleDragStart} className="imgcarrusel" />,

];

export const Certificate = () => {
  return (
    <div >
            <span className="tittle">Entes Certificadores</span>
            <div className="divCarrusel">
                <AliceCarousel mouseTracking items={items} />
            </div>
        </div> 
  );
}