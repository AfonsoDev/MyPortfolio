import React, {useContext} from 'react';

import { Container } from './styles';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import {shade} from 'polished';

const Header: React.FC = () => {
    const { color } = useContext(ThemeContext)
  return (
    <Container>
        Hellow Word
        <ReactSwitch 
            onChange={() =>{}}
            checked={false}
            checkedIcon={true}
            uncheckedIcon={true}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={shade(0.1, color.primary)}
            onColor={color.secundary}
        />
    </Container>
  );
}

export default Header;