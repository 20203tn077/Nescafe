import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Cofee() {

  const navigation = useNavigation()
  
  return (
    <View>
      <Button
        title='Crear alarma'
        icon={
          <Icon
            name='clock'
            type='feather'
            size={15}
            color='#000'
          />
        }
        onPress={() => navigation.navigate('coffeeRegister')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})