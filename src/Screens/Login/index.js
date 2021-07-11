import React, { useState } from "react";
import { Text, TouchableOpacity, TextInput, Colors, ActivityIndicator, SafeAreaView, View, Alert } from "react-native";
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { styles } from './styles'
import * as axios from 'axios';
import { CommonAPI } from '../Common/api'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Loader, setLoader] = useState(false)
  const socialLogin = async () => {
    GoogleSignin.configure({
      scopes: [], // what API you want to access on behalf of the user, default is email and profile
      webClientId: CommonAPI.ClientID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        navigation.push('DashBoard')
      }
    }
    catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {// user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) { // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {// play services not available or outdated
      } else {// some other error happened
      }
    }
  }

  const loginBtn = () => {
    setLoader(true)
    let LoginData = { email, password }
    if (LoginData.email == "" && LoginData.password == "") {
      setLoader(false)
      Alert.alert('Please Enter the EmailID and Password')
    } else {
      axios.post(CommonAPI.Login, LoginData)
        .then(function (response) {
          setLoader(false)
          console.log(response.data, "Login Response");
          navigation.push('DashBoard')
        })
        .catch(function (error) {
          setLoader(false)
          console.log(error);
          if (error) {
            Alert.alert('Please Enter the Correct EmailID and Password')
          }
        })
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.signUpText}>Welcome</Text>
      </View>
      <View style={styles.textinputView}>
        <KeyboardAwareScrollView>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder='Enter Your Email'
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              style={styles.input}
              placeholder='Enter Your Password'
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity style={styles.loginBtn} onPress={() => loginBtn()} >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <GoogleSigninButton
              style={{ width: 192, height: 48, marginTop: "10%" }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => socialLogin()}
              disabled={false} />
          </View>
        </KeyboardAwareScrollView>
      </View>
      {Loader &&
      <View style={[styles.containers, styles.flexCenter]}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>}

    </SafeAreaView>
  );
};
export default LoginScreen;
