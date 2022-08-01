import React, { useState, useRef, useContext } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions } from 'react-native';
import Fonts from '../../../font/Fonts';
import { scale } from '../../../Scale';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigations/RootStackParams';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack'
import { UserConText } from '../UserContext';

type Props = NativeStackScreenProps<RootStackParams>;
const Login = ({ route, navigation }: Props) => {
  const { onLogin } = useContext(UserConText);
  const [username, setUsername] = useState('Tranquangdao@gmail.com');
  const [password, setPassword] = useState('123456');
  const login = async () => {
    const res = await onLogin(username, password);
    if (!res) alert('Sai tài khoản mật khẩu')
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackgroud}
        resizeMode='contain'
        source={require('../../../assets/images/backgroudALL.png')}>
        <Text style={styles.textHey}>Hey, mừng bạn đến với</Text>
        <Text style={styles.textPepsi}>Pepsi Tết</Text>
        <Text style={styles.textDangNhap}>ĐĂNG NHẬP</Text>

        <Text style={styles.textSDT}>Tài khoản Email</Text>
        <View>
          <TextInput style={styles.textInput}
            value={username}
            onChangeText={setUsername}

            placeholder='Nhập email của bạn'
          >
          </TextInput>
        </View>
        <Text style={styles.textSDT}>Mật khẩu</Text>
        <View>
          <TextInput style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder='nhập mật khẩu của bạn'
          >
          </TextInput>
        </View>
        <View style={styles.img3lon}>
          <Image source={require('../../../assets/images/3lon.png')}></Image>
        </View>

        <TouchableOpacity
          onPress={login}>
          <View style={[styles.btnOTP, { backgroundColor: username && password ? '#FC3B3B' : '#8E8E8E' }]}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={styles.imgOTP1}
                source={require('../../../assets/images/imgDangnhap1.png')}></Image>
              <Text style={styles.textMaOTP}>Đăng Nhập</Text>
              <Image style={styles.imgOTP2}
                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={styles.textHoac}>Hoặc</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <View style={styles.btnDangNhap}>
            <View style={{ flexDirection: 'row' }}>

              <Image style={styles.imgOTP1}
                source={require('../../../assets/images//imgDangnhap1.png')}></Image>
              <Text style={styles.textDangnhap}>Đăng Ký</Text>
              <Image style={styles.imgDangnhap2}
                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
            </View>
          </View>
        </TouchableOpacity>
        {/* <Image style={styles.imgBackgroud3}
          resizeMode='contain'
          source={require('../../../assets/images/backgroud3.png')}></Image> */}



      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0063A7'
  },
  imgBackgroud: {
    width: 370,
    height: 800
  },
  textHey: {

    textAlign: 'center',
    marginTop: 100,
    color: '#FFFFFF',
    top: -10
  },
  textPepsi: {
    ...Fonts.h2,
    textAlign: 'center',
    marginTop: 10,
    top: -10
  },
  textDangNhap: {
    ...Fonts.h3,
    textAlign: 'center',
    marginTop: 40,
    top: -20

  },
  textSDT: {
    ...Fonts.h9,
    marginTop: 5,
    marginLeft: 30
  },
  textInput: {
    height: 50,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 5,
    paddingHorizontal: 10
  },
  img3lon: {
    alignSelf: 'center',
    marginTop: 25
  },
  btnOTP: {
    height: 50,
    width: 250,
    // backgroundColor: '#8E8E8E',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 30
  },
  textMaOTP: {
    alignSelf: 'center',
    ...Fonts.h5,
    marginTop: 6,
    marginLeft: 28
  },
  imgOTP1: {
    height: 48,
    width: 50,
    borderRadius: 10
  },
  imgOTP2: {
    height: 48,
    width: 50,
    borderRadius: 10,
    marginLeft: 27
  },
  textHoac: {
    textAlign: 'center',
    marginTop: 5,
    ...Fonts.h4
  },
  btnDangNhap: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'yellow',
    marginTop: 5
  },
  textDangnhap: {
    ...Fonts.h6,
    alignSelf: 'center',
    marginTop: 6,
    marginLeft: 35
  },
  imgDangnhap2: {
    height: 48,
    width: 50,
    borderRadius: 10,
    marginLeft: 43
  },
  imgBackgroud3: {
    width: 100
  }
});

export default Login;

