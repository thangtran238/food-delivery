import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type Props = {
    children?: React.ReactNode;
    text?: {
        title?: string;
        viewmore?: string;
    };
};

const ViewMore = (props: Props) => {
    const text = {
        title: props.text?.title || 'Add text here',
        viewmore: props.text?.viewmore || '',
    };
    return (
        <View style={styles.tex_container}>
            <Text style={styles.first}>{text.title}</Text>
            <Text style={styles.second}>{text.viewmore}</Text>
        </View>
    );
};

export default ViewMore;

const styles = StyleSheet.create({
    tex_container: {
        flexDirection: 'row',
        paddingHorizontal: 35,
        paddingTop: 25,
        justifyContent: 'space-between',
    },
    first: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    second: {
        fontSize: 12,
        color: '#6B50F6',
    },
});
