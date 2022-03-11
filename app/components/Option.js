import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Image } from 'react-native-elements';

export default function Option(props) {
    const { showOverlay, name, image } = props;
    //image = "asd"
    return (
        <Card
            
        >
            <Card.Title>{name}</Card.Title>
            <Image
            onPress={() => {showOverlay(name)}}
                style={{height: 200, width: 200}}
                resizeMode="cover"
                source={require(`../../assets/icon.png`)}
            />
        </Card>
    )
}

const styles = StyleSheet.create({})