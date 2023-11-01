import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import R from '../R';
import Button from '../components/Button'
type Props = {}

const Banner = (props: Props) => {
    return (
        <View>
            <View>
                {/* <ImageBackground source={{ uri: R.images.a }} resizeMode='cover' style={styles.image} /> */}
                <Image source={{ uri: R.images.an }} resizeMode='cover' style={styles.image} />
            </View>
            <View style={styles.box_container}>
                <Image source={require('../../res/image/icream.png')} style={{ width: 200, height: 200}} resizeMode="contain"></Image>
                <View style={styles.box}>
                    <Text style={styles.text}>Special Deal For October</Text>
                    <Button styleType='short' text={{text: "Buy Now"}}></Button>
                </View>
            </View>
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    box_container: {
        backgroundColor: '#6B50F6',
        alignSelf: 'center',
        marginTop: 20,
        width: 390,
        height: 150,
        borderRadius: 16,
        gap: 50,
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        flex: 1,
    },
    text: {
        color: 'white',
        width: '50%',
        marginRight: 10,
        fontWeight: '700',
        fontSize: 17,
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
    },
});
