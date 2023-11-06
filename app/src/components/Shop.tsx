import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

type Props = {
    children?: React.ReactNode;
    source?: {
        image_url?: string | ImageSourcePropType;
    };
    text?: {
        title?: string;
        time?: string;
    };
};

const Shop = (props: Props) => {
    let imageSource = props.source?.image_url || '';
    if (typeof imageSource === 'string') {
        imageSource = { uri: imageSource };
    }

    const text = {
        title: props.text?.title || '',
        time: props.text?.time || '',
    };
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.title}>{text.title}</Text>
            <Text style={styles.time}>{text.time} mins</Text>
        </View>
    );
};

export default Shop;

const styles = StyleSheet.create({
    container: {
        width: 147,
        height: 184,
        borderRadius: 22,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems:'center',    
        shadowColor: "#ccc",
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
          width: 1,
          height: 1,
        },
    },
    image: {
        width: 80,
        height: 80,
        objectFit: "cover"
        },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    time: {
        fontSize: 13,
        color: 'grey',
        alignSelf: 'center',
    },
});
