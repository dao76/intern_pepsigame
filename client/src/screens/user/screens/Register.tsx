import React, { useState, useContext } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, ImageBackground } from 'react-native';
import Fonts from '../../../font/Fonts';

import { RouteProp, useNavigation } from '@react-navigation/native';
// type ProfileScreenRouteProp = RouteProp<RootStackParams, 'DoneScreen'>;
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { UserConText } from '../UserContext';
type Props = NativeStackScreenProps<RootStackParams>;
const Register = ({ route, navigation }: Props) => {
    const { onRegister } = useContext(UserConText);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const regitser = async () => {
        const res = await onRegister(username, password, name);
        if (res) alert('đăng ký thành công')
    }
    const isValidationOk = () => username.length > 0 && password.length > 0 && name.length > 0
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroud1}
                resizeMode='contain'
                source={require('../../../assets/images/backgroudALL.png')}>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.textHey}>Hey, mừng bạn đến với</Text>
                        <Text style={styles.textPepsi}>Pepsi Tết</Text>

                    </View>

                </View>
                <Text style={styles.textDangKy}>ĐĂNG KÝ</Text>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Email'
                        value={username}
                        onChangeText={setUsername}
                    >
                    </TextInput>
                    <TextInput style={styles.textInput1}
                        placeholder='Password'
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    >
                    </TextInput>
                    <TextInput style={styles.textInput1}
                        placeholder='Tên người dùng'
                        value={name}
                        onChangeText={setName}
                    >
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
                    <Text style={styles.textChekBox}>Tôi đã đọc và đồng ý với</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('TheLeChuongTrinh')}>
                        <Text style={styles.textTheLe}>Thể lệ chương trình</Text>
                    </TouchableOpacity>
                    <Text style={styles.textChekBox}>Pepsi Tết</Text>
                </View>
                <Image style={styles.imgHoa2}
                    source={require('../../../assets/images/hoa.png')}></Image>
                <Image style={styles.imgHoa3}
                    source={require('../../../assets/images/hoa.png')}></Image>

                <TouchableOpacity disabled={isValidationOk() == false}
                    onPress={regitser}
                >
                    <View style={[styles.btnOTP, { backgroundColor: username && password && name ? '#FC3B3B' : '#8E8E8E' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/imgDangnhap1.png')}></Image>
                            <Text style={styles.textMaOTP}>Đăng Ký</Text>
                            <Image style={styles.imgOTP2}
                                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <Text style={styles.textHoac}>Hoặc</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.btnDangNhap}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/imgDangnhap1.png')}></Image>
                            <Text style={styles.textDangnhap}>Đăng nhập</Text>
                            <Image style={styles.imgDangnhap2}
                                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
                        </View>

                    </View>
                </TouchableOpacity>

            </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0063A7',

    },
    backgroud1: {
        width: 370,
        height: 800
    },
    backgroud2: {
        height: 130,
        width: '100%',

    },
    textHey: {
        marginTop: 120,
        marginLeft: 6,
        ...Fonts.h1,
    },
    textPepsi: {
        ...Fonts.h2,
        textAlign: 'center',
        marginTop: 8
    },
    imgHoa: {
        height: 50,
        width: 50,
        right: 145,
        marginTop: 10
    },
    textDangKy: {
        ...Fonts.h3,
        textAlign: 'center',
        paddingTop: 64,
        paddingBottom: 20
    },
    textInput: {
        height: 50,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 5,
        paddingHorizontal: 10,
    },
    textInput1: {
        height: 50,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 18,
        paddingHorizontal: 10
    },
    textChekBox: {
        ...Fonts.h4
    },
    textTheLe: {
        marginLeft: 5,
        marginRight: 5,
        color: 'yellow',
        fontWeight: 'bold'
    },
    imgHoa2: {
        width: 50,
        height: 50,
        marginLeft: 395
    },
    imgHoa3: {
        width: 50,
        height: 50,
    },
    btnOTP: {
        height: 50,
        width: 250,
        backgroundColor: '#8E8E8E',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    },
    textMaOTP: {
        alignSelf: 'center',
        ...Fonts.h5,
        marginTop: 6,
        marginLeft: 38,

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
        marginLeft: 39
    },
    textHoac: {
        textAlign: 'center',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
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
        marginLeft: 25
    },
    imgDangnhap2: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 33.5
    },
    imgS: {
        height: 180,
        width: 150,
    },
    imgBackgroud3: {
        height: 180,
        width: 240,
        marginLeft: 90,
        paddingBottom: 10

    }

});

export default Register;