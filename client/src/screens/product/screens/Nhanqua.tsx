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
const Nhanqua = ({ navigation }: { navigation: any }) => {
    const index = Math.floor(Math.random() * (3 - 0) + 0) // Nếu data có 4 phần tử thì bỏ số 4

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackGroudHome}
                resizeMode='contain'
                source={require('../../../assets/images/BgHomePage.png')}
            >
                <Image
                    style={styles.img}
                    source={data[index].img}
                    resizeMode='contain'
                />
                <View style={{ alignItems: 'center', top: 120 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                        Chúc mừng bạn đã nhận được
                    </Text>
                    <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                        <Text style={{ color: 'yellow', fontWeight: 'bold', fontSize: 20 }} >1 lon {data[index].name}</Text> ứng với <Text style={{ color: 'yellow', fontWeight: 'bold', fontSize: 20 }}>50 Coin</Text>
                    </Text>
                </View>
                <TouchableOpacity >
                    <View style={styles.btnQuatang}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/imgDangnhap1.png')}></Image>
                            <Text style={styles.textQuatang}>Xác nhận</Text>
                            <Image style={styles.imgQuatang}
                                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <Image style={styles.imgfooter1}
                    source={require('../../../assets/images/icon111111.png')}></Image>
            </ImageBackground>
        </View>
    )
}

export default Nhanqua

const styles = StyleSheet.create({
    imgQuatang: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: -4
    },
    imgOTP1: {
        height: 48,
        width: 50,
        borderRadius: 10
    },
    textQuatang: {
        alignSelf: 'center',
        marginTop: 1,
        marginLeft: 5,
        left: 0,
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    btnQuatang: {
        height: 50,
        width: 170,
        backgroundColor: '#FC3B3B',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 155
    },
    imgfooter1: {
        bottom: -58,
        width: 173,
        height: 45
    },
    imgBackGroudHome: {
        height: 800,
        // width: 455,
        // width: windowHeight,
        alignItems: 'center',
        width: 400
    },
    img: {
        width: 300,
        height: 400,
        top: 100,
        left: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1164A3"
    }
})

const data = [
    {
        id: 0,
        name: "7UP Lộc",
        img: require('../../../assets/images/qua1.png')
    },
    {
        id: 1,
        name: "Pepsi An",
        img: require('../../../assets/images/qua2.png')
    },
    {
        id: 2,
        name: "Mirinda Phúc",
        img: require('../../../assets/images/qua3.png')
    },
]
