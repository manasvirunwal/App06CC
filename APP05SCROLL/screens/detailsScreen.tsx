import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export const DetailScreen = (props: any) => {
    const post: any = props.route.params.selectedPost
    return (
        <ScrollView testID="details-wrapper" style={styles.screen}>
            <Text style={styles.text}>
                {JSON.stringify(post, null, 10)}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 2,
        padding: 10,
        margin: 20,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        fontSize: 16
    }
})