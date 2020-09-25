import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Actions, UserIcon, UserName } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Actions>
        <Icon name="videocam" size={28} color="#606060" />
        <Icon name="search" size={28} color="#606060" />
        <UserIcon>
          <UserName>N</UserName>
        </UserIcon>
      </Actions>
    </Container>
  );
};

export default Header;
