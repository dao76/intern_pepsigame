import React, { useContext, useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, FlatList } from 'react-native';
import { scale } from '../../../Scale';
import Fonts from '../../../font/Fonts';
import { ProductContext } from '../ProductConText';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigations/RootStackParams';
// type ProfileScreenRouteProp = RouteProp<RootStackParams, 'DoneScreen'>;
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack'
import { UserConText } from '../../user/UserContext';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
type Props = NativeStackScreenProps<RootStackParams>;

const Mainplay = ({ navigation }: { navigation: any }) => {

    const [ani, setAni] = useState(false)
    const check = () => {
        console.log(ani);

        setAni(true);
        navigation.replace('Nhanqua');
    }
    return (
        <View style={styles.container}>

            <ImageBackground style={styles.imgBackGroudHome}
                resizeMode='cover'
                source={require('../../../assets/images/BgPlay.png')}
            >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home_Page')} style={{ width: 100, height: 100 }}>
                        <Image style={styles.imgBack}
                            source={require('../../../assets/images/Vector.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTheLe}>Vuốt lên để chơi</Text>
                </View>

                <TouchableOpacity >
                    <Image style={styles.logOut}
                        source={require('../../../assets/images/log_out.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 13, marginTop: 1, color: 'white' }}>bạn còn 3 lượt để chơi</Text>
                <Image style={styles.imgmark}
                    resizeMode='cover'
                    source={require('../../../assets/images/imgMack.png')}></Image>
                <Image style={styles.keo}
                    source={require('../../../assets/images/keolen.png')}></Image>
                <TouchableOpacity onPress={check} style={ani ? [styles.imgLan, { top: 500 }] : [styles.imgLan, { top: 600 }]}>
                    <Image style={styles.imgLan}
                        source={require('../../../assets/images/lan.png')}></Image>
                </TouchableOpacity>


            </ImageBackground>


        </View>

    )
}

export default Mainplay

const styles = StyleSheet.create({
    imgBack: {
        height: 18,
        width: 10,
        marginTop: 50,

    },
    textTheLe: {
        ...Fonts.h7,
        marginTop: 48,
        left: -40
    },

    textmodalplay: {
        fontSize: 13,
        alignSelf: 'center',
        marginTop: 10,
        marginLeft: 8,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    textmodalplay1: {
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 5,
        marginLeft: 8,
        color: '#FFFFFF'
    },
    btnmodal: {
        height: 56,
        width: 200,
        backgroundColor: '#FC3B3B',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 10,

    },
    imgfooter1: {
        marginTop: 32,
        width: 175
    },
    imgfooter: {
        width: windowWidth,
        height: windowHeight,
    },
    lottieView: {
        width: 100,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#FBD239',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    container: {
        flex: 1,
        backgroundColor: '#0063A7'
    },
    imgBackGroudHome: {
        // height: 790,
        // width: 455,
        // width: windowHeight,
        alignItems: 'center',
        height: 800,
    },
    logOut: {
        height: 25,
        width: 25,
        marginLeft: 300,
        marginTop: -50
    },
    imgLan: {
        height: 220,
        width: 220,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 15,

    },
    keo: {
        height: 70,
        width: 70,
        alignSelf: 'center',
        top: 530,
        position: 'absolute'
    },
    imgmark: {
        height: 400,
        width: 300,
        alignSelf: 'center',
        top: 45
    },
    textHuongDan: {
        ...Fonts.h11,
        textAlign: 'center'
    },
    btnOTP: {
        height: 70,
        width: 270,
        backgroundColor: '#C41920',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 40
    },
    textplay: {
        alignSelf: 'center',
        ...Fonts.h4,
        marginLeft: 37,
        paddingTop: 5
    },
    textMaOTP: {
        alignSelf: 'center',
        ...Fonts.h5,
        marginLeft: 15
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
        marginLeft: 35,
        marginTop: 20
    },
    btnQuetMa: {
        height: 50,
        width: 270,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 30
    },
    textQuetMa: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 40
    },
    imgDangnhap2: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 48
    },
    btnBosuutap: {
        height: 50,
        width: 270,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 30
    },
    textBosuutap: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 32
    },
    imgBosuutap: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 35
    },
    btnBosuutap1: {
        height: 50,
        width: 200,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 10
    },
    btnBosuutap2: {
        height: 50,
        width: 200,
        backgroundColor: '#FC3B3B',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 10
    },
    textBosuutap1: {
        ...Fonts.h19,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 32
    },
    textBosuutap2: {
        fontSize: 13,
        alignSelf: 'center',
        marginTop: 10,
        marginLeft: 8,

    },
    textBosuutap3: {
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 10,
        marginLeft: 8
    },
    imgBosuutap1: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 35
    },
    btnQuatang: {
        height: 50,
        width: 270,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 30
    },
    textQuatang: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 5
    },
    imgQuatang: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 8
    }
});