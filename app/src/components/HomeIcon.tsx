
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface HomeIconProps {
  name: string;
  color: string;
  focused?: boolean;
}

const HomeIcon: React.FC<HomeIconProps> = ({ name, color, focused = false }) => {
  return (
    <Icon name={focused ? name : `${name}-outline` } size={24} color={color} />
  );
}

export default HomeIcon;
