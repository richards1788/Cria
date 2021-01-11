import React from 'react';
import { Grid } from '@material-ui/core';
import CardsData from './data.json';
import Cards from './Cards';

const getImage = (name) => {
  return require(`../../assets/img/${name}`)
}

function ListActivity () {
  return (
    
    <React.Fragment>
      <Grid container spacing={24} justify="center">
        {
          CardsData.map((data) =>
            <Cards data={data} image={getImage(data.img)}/>
          )
        }
      </Grid>
    </React.Fragment>
  );
 
}
export default ListActivity;