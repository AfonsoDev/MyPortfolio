import React, {useContext} from 'react';

import { Container } from './styles';
import ReactSwitch from 'react-switch';
import { ThemeContext } from 'styled-components';
import {shade} from 'polished';

interface Props{
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
    const { color, title } = useContext(ThemeContext)
  return (
    <Container>
        AfonsoDev
        <ReactSwitch 
            onChange={toggleTheme}
            checked={title === 'dark'}
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