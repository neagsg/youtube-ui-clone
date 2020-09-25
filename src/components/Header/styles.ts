import styled from 'styled-components/native';

import logoImg from '../../assets/logo.png';

export const Container = styled.View`
  height: 56px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px;
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
`;

export const Logo = styled.Image.attrs({
  source: logoImg,
  resizeMode: 'contain',
})`
  height: 28px;
  width: 100px;
`;

export const Actions = styled.View`
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserIcon = styled.View`
  background: #8395a7;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;
export const UserName = styled.Text`
  color: #fff;
  font-size: 16px;
`;
