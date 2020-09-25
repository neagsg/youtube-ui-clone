import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from './components/Header';
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import Subscriptions from './pages/Subscriptions';
import Notifications from './pages/Notifications';
import Library from './pages/Library';

interface TitleProps {
  title: string;
  color: string;
}

const Tab = createBottomTabNavigator();

function TitleBottom({ title, color }: TitleProps) {
  return (
    <Text
      style={{
        fontSize: 12,
        color: color,
        marginBottom: 4,
      }}>
      {title}
    </Text>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        screenOptions={{}}
        tabBarOptions={{
          activeTintColor: '#cc3030',
          labelPosition: 'below-icon',
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
            tabBarLabel: ({ color }) => (
              <TitleBottom title="Início" color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="explore" size={size} color={color} />
            ),
            tabBarLabel: ({ color }) => (
              <TitleBottom title="Explorar" color={color} />
            ),
          }}
          name="Explorer"
          component={Explorer}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="subscriptions" size={size} color={color} />
            ),
            tabBarLabel: ({ color }) => (
              <TitleBottom title="Inscrições" color={color} />
            ),
          }}
          name="Subscriptions"
          component={Subscriptions}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" size={size} color={color} />
            ),
            tabBarLabel: ({ color }) => (
              <TitleBottom title="Notificações" color={color} />
            ),
          }}
          name="Notifications"
          component={Notifications}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="video-library" size={size} color={color} />
            ),
            tabBarLabel: ({ color }) => (
              <TitleBottom title="Biblioteca" color={color} />
            ),
          }}
          name="Library"
          component={Library}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
