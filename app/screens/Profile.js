import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast'

export default function Profile(props) {
  const navigation = useNavigation()
  const toastRef = useRef();

  return (
    <View>
      <Button
        title='Iniciar sesión'
        icon={
          <Icon
            name='clock'
            type='feather'
            size={15}
            color='#000'
          />
        }
        onPress={() => toastRef.current.show('Ricardo voy a pasar mi examen')}
      />
      <Text
      onPress={() => navigation.navigate('signIn')}
      >Crea una cuenta NESTLÉ</Text>
      <Toast
        ref={toastRef}
        position="center"
      />
    </View>
    
  )
}

const styles = StyleSheet.create({})