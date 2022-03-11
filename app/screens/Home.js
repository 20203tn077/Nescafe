import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Option from '../components/Option'
import { Overlay } from 'react-native-elements'

export default function Home() {

    const [overlayVisible, setOverlayVisible] = useState(false);
    const [coffeeName, setCoffeeName] = useState('');

    const showOverlay = (name) => {
        setCoffeeName(name)
        setOverlayVisible(true)
        console.log("hola")
    }

    const cafes = [
        {
            name: 'Holaaaa',
            image: 'icon.png'
        },
        {
            name: 'Holaaa3a',
            image: 'icon.png'
        },
        {
            name: 'Holaaa2a',
            image: 'icon.png'
        },
    ]

    return (
        <ScrollView>
            {cafes.map(({ name, image }, index) => {
                return (
                    <Option
                        key={index}
                        name={name}
                        image={image}
                        showOverlay={showOverlay}
                    />
                )
            })}
            <Overlay isVisible={overlayVisible} onBackdropPress={() => { setOverlayVisible(false) }}>
                <Text>El café a preparar será un {coffeeName}</Text>
            </Overlay>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})