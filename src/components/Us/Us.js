import * as React from 'react';
import Container from '@material-ui/core/Container';
import { Card, CardContent } from '@material-ui/core';


export const Paragraph = () => {
  return (
    <div className="boxUs">
    <React.Fragment>
      <span class="ant-Typography" className="tittle">
        Nosotros
      </span>
      <div class="ant-row about section">
        <div class="ant-col imgCol ant-col-xs-24 ant-col-lg-12"  >
          
            <span class="ant-Typography" className="tittle">
              Quienes Somos!
          </span>
          <Container maxWidth="sm" >
            <Card >
              <CardContent>
                <p className="textReference">"El Centro Rural de Investigación
                Agropecuaria CRIA es una organización de la
                región dedicada a la optimización de los procesos
                agropecuarios; para ello contamos con un equipo
                interdisciplinario y de alta calidad humana, marcando la diferencia
                en aspectos de sustentabilidad y sostenibilidad en 
                la vereda Agua Blanca del municipio de Milán Caquetá
                "
                </p>
                <p className="textReference">"El Centro Rural de Investigación
                Agropecuaria CRIA es una organización de la
                región dedicada a la optimización de los procesos
                agropecuarios; para ello contamos con un equipo
                interdisciplinario y de alta calidad humana, marcando la diferencia
                en aspectos de sustentabilidad y sostenibilidad en 
                la vereda Agua Blanca del municipio de Milán Caquetá
                "
                </p>
              </CardContent>
            </Card>
          </Container>
        </div>
        <div class="ant-col imgCol ant-col-xs-24 ant-col-lg-12" >
          <span class="ant-Typography" className="tittle">
            Misión
          </span>
          <Container maxWidth="sm">
            <Card >
              <CardContent>
                <p className="textReference">Somos empresa productora de leche con estándares técnicos 
                y de calidad superior que requiere el mercado de la zona, 
                basados en los principios de conservación, sostenibilidad y sustentabilidad. 
                </p>
              </CardContent>
            </Card>
          </Container>
          <span class="ant-Typography" className="tittle">
            Visión
          </span>
          <Container maxWidth="sm">
            <Card>
              <CardContent>
                <p className="textReference">Ser la empresa productora de leche con más 
                alto estándar técnico y de calidad con mira en la conservación 
                ambiental en el municipio de Milán.
                </p>
              </CardContent>
            </Card>
          </Container>
        </div>
      </div>
    </React.Fragment>
    </div>
  );

}