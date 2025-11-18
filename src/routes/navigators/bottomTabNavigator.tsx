import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Skills } from '../../screens/Skills';
import { Shop } from '../../screens/Shop';
import SkillIcon from '../../../assets/SkillIcon.png'
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Skills: {};
    Shop: { id: string };
};

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#000', paddingBottom: 2},
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#aaa'
        }}
    >
        <Tab.Screen 
            name="Skills" 
            component={Skills}
            options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        resizeMode='contain'
                        source={SkillIcon}
                        style={{ tintColor: color, width: 30 }}
                    />
                )
            }}
        />
        <Tab.Screen 
            name="Shop" 
            component={Shop} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Entypo name="shopping-cart" size={24} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  );
}