
import { Layout } from 'antd';
import * as React from 'react'
import ListActivity from './ListActivity';
//import semilla from '../../assets/img/semillas.jpg';

const { Content } = Layout;
export const Activity = (props) => {
  return (

    <div className="boxAc">
      <Content>
      {/*   <img
          className="imag"
          src={semilla}
          alt=""
        /> */}
        <h1 className="tittle">Nuestros Servicios</h1>
        <ListActivity/>
      </Content>
    </div>

  );

}