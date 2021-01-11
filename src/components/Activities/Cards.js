import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Button } from 'antd';


function ServicesCard({ data, classes, image }) {
    return (
        <div>
            <Container maxWidth="md">
                <Card className={classes.item}>
                    <CardMedia className={classes.media} image={image} />
                    <CardContent>
                        <Typography className="tittle"> {data.services} </Typography>
                        <Typography> {data.description} </Typography>
                    </CardContent>
                    <Button className="leer">Leer Mas..</Button>
                </Card>
            </Container>
        </div>
    );
}
export default withStyles({
    item: {
        minWidth: "200",
        maxWidth: "350px",
        margin: "1em",
        boxSizing: "border-box",

    },
    media: {
        minHeight: "135px",
        maxHeight: "100px"
    }
})(ServicesCard); 