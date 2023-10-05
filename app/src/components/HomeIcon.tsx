// HomeIcon.tsx
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';



const HomeIcon: React.FC<Icon> = ({ name, color, focused }) => {
  return (
    <Icon name={focused ? name : `${name}-outline`} size={24} color={color} />
  );
}

export default HomeIcon;
