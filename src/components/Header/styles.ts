import styled from 'styled-components/native';

import logoImg from '../../assets/logo.png';

export const Container = styled.View`
  height: 42px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: #cecece;
`;

export const LogoTitle = styled.View`
  flex-direction: row;
`;

export const Logo = styled.Image.attrs({
  source: logoImg,
})`
  height: 32px;
  width: 32px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;
