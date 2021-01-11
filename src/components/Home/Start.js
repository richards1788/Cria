import * as React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import potro from '../../assets/img/potro.jpg'
import oveja from '../../assets/img/oveja.jpg'
import vaca from '../../assets/img/vaca.jpg'
import logo from '../../assets/img/logos.jpg'

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={potro} alt="" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={oveja} alt="" onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={vaca} alt="" onDragStart={handleDragStart} className="yours-custom-class" />,
];

export const Start = () => {
  return (

    <div className="transboxSt">
      <AliceCarousel  mouseTracking items={items} />
      <div  className="divlogo">
        <img className="imglogo" src={logo} alt="" />
      </div>
    </div>



  );
}