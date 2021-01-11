import * as React from 'react';
import { Layout, Menu, Row, Col } from 'antd';

const { Header } = Layout;

export const HeaderC = () => {
  return (
    <div>
      <Layout >
    <Header className= "header">
      <Row justify={"end"}>
        <Col>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Inicio</Menu.Item>
        <Menu.Item key="2">Nosotros</Menu.Item>
        <Menu.Item key="3">Servicios</Menu.Item>
        <Menu.Item key="4">Actividades</Menu.Item>
        <Menu.Item key="5">Contactos</Menu.Item>
      </Menu>
        </Col>
       
      </Row>
    </Header>
    </Layout>
    </div>
  )
} 