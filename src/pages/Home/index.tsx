import React from 'react';

import { Container,ContainerWallpaper,ContainerImagemAnimation } from './styled';

import Global from '../../themes/global';
import Header from '../../components/Header';
import { Row, Col } from 'react-bootstrap';

interface Props{
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({toggleTheme}) => {
  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      <ContainerWallpaper>
        <Row>
          <Col md={6}>DAle</Col>
          <Col md={6}>oi</Col>
        </Row>
      </ContainerWallpaper>
    </>
  );
}

export default Home;