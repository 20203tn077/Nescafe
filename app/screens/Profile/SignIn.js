import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Icon, Input } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Toast from 'react-native-easy-toast'

export default function SignIn() {

  const elegirImagen = async () => {
    const imagen = false

    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA)
    if (resultPermissions.permissions.camera.status !== 'denied') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,4],
        quality: 1,
        base64: true
      })
      if (!result.cancelled) {
        const imagen = true
      } else {
        console.log("Es necesario seleccionar una imagen");
      }
    } else {

    } console.log('Es necesario aceptar los permisos');
  }

  const navigation = useNavigation()
  const toastRef = useRef()

  const [formData, setFormData] = useState({nombre: '', hora: '', descripcion: ''})
  const [errorName, setErrorName] = useState('')
  const [errorTime, setErrorTime] = useState('')
  const [errorDescription, setErrorDescription] = useState('')

  const change = (event, type) => {
    setFormData({ ...formData, [type]: event.nativeEvent.text })
    console.log(formData)
  }

  const registrar = () => {
    const {nombre, hora, descripcion} = formData
    let errores = 0
    if (isEmpty(nombre)) {
      setErrorName('Debes ingresar un nombre')
      errores++
    } else setErrorName('')

    if (isEmpty(hora)) {
      setErrorTime('Debes ingresar una hora')
      errores++
    } else setErrorTime('')

    if (isEmpty(descripcion)) {
      setErrorDescription('Debes ingresar una descripción')
      errores++
    } else setErrorDescription('')

    if (errores == 0) {
      toastRef.current.show('Listo para el registro')
      setTimeout(() => navigation.navigate('coffee'), 1000)
    }
  }
  return (
    <View>
      <Button
        title='Elegir imagen'
        icon={
          <Icon
            name='clock'
            type='feather'
            size={15}
            color='#000'
          />
        }
        onPress={elegirImagen}
      />
      <Input
        placeholder='Latte'
        rightIcon={
          <Icon
            type='feather'
            name='coffee'
            size={20}
            color='#ff5a60'
          />
        }
        label='Nombre:'
        onChange={(event) => change(event, 'nombre')}
        errorMessage={errorName}
      />
      <Input
        placeholder='12:35'
        rightIcon={
          <Icon
            type='feather'
            name='clock'
            size={20}
            color='#ff5a60'
          />
        }
        label='Hora:'
        onChange={(event) => change(event, 'hora')}
        errorMessage={errorTime}
      />
      <Input
        placeholder='Café con leche'
        rightIcon={
          <Icon
            type='feather'
            name='align-left'
            size={20}
            color='#ff5a60'
          />
        }
        label='Descripción:'
        onChange={(event) => change(event, 'descripcion')}
        errorMessage={errorDescription}
      />
      
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
        onPress={registrar}
      />
      <Toast
        ref={toastRef}
        position="center"
      />
    </View>
  )
}

const styles = StyleSheet.create({})