import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, LogoTitle, Logo, Title, Actions } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoTitle>
        <Logo />
        <Title>Youtube</Title>
      </LogoTitle>
      <Actions>
        <Icon name="videocam" size={20} />
        <Icon name="search" size={20} />
        {/* <Icon name="move-vert" size={20} /> */}
      </Actions>
    </Container>
  );
};

export default Header;
