import React, { useState, useEffect, useContext } from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, FlatList, ToastAndroid } from 'react-native';
import { scale } from '../../../Scale';
import Fonts from '../../../font/Fonts';
import { ProductContext } from '../ProductConText';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigations/RootStackParams';
// type ProfileScreenRouteProp = RouteProp<RootStackParams, 'DoneScreen'>;
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
type Props = NativeStackScreenProps<RootStackParams>;
import { LinearGradient } from 'expo-linear-gradient';
import { UserConText } from '../../user/UserContext';
import { UpdateCoin } from '../ProductService';

const GiftInfo = ({ route }) => {
    const { onProductadd, onUpdatCoin } = useContext(ProductContext);
    const { userInfo } = useContext(UserConText)
    console.log('user info ' + JSON.stringify(userInfo));
    const [hvt, setHvt] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const addProductToGitf = async () => {
        if (userInfo.coin > item.price) {
            let body = item

            const status = await onProductadd({ ...body, hvt, phone, address, note, id_user: userInfo.id });
            if (status) {
                ToastAndroid.show('Đã thêm vào đơn hàng', ToastAndroid.BOTTOM)
            } else {
                ToastAndroid.show('Đã thêm vào đơn hàng', ToastAndroid.BOTTOM)
            }

        }

    }
    const add = async () => {
        if (userInfo.coin > item.price) {
            userInfo.coin = userInfo.coin - item.price
            const update = await onUpdatCoin(userInfo.id, userInfo.coin);
            if (update) {
                ToastAndroid.show('Đã thêm vào đơn hàng', ToastAndroid.BOTTOM)
            } else {
                ToastAndroid.show('Đã thêm vào đơn hàng', ToastAndroid.BOTTOM)
            }
        } else {
            ToastAndroid.show('Bạn không đủ coin', ToastAndroid.BOTTOM)

        }


    }

    const { item } = route.params
    return (
        <View style={styles.Container}>
            <LinearGradient style={{ width: '100%', height: '100%' }}
                colors={['#FFD76C', '#F2CD6C', '#EEAD00']}>
                <Text style={styles.title}>Thông Tin Nhận Quà</Text>
                <Text style={styles.info}>Qùa của bạn : <Text>{item.name}</Text></Text>
                <Text style={styles.text}>Họ và tên </Text>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder='Họ Và Tên'
                        value={hvt}
                        onChangeText={setHvt}

                    >
                    </TextInput>
                </View>
                <Text style={styles.text}>Số điện thoại </Text>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder='số điện thoại'
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType='number-pad'

                    >
                    </TextInput>
                </View>
                <Text style={styles.text}>Địa chỉ </Text>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder='địa chỉ'
                        value={address}
                        onChangeText={setAddress}

                    >
                    </TextInput>
                </View>
                <Text style={styles.text}>Ghi chú </Text>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder='Ghi chú(nếu có)'
                        value={note}
                        onChangeText={setNote}

                    >
                    </TextInput>
                </View>
                <TouchableOpacity onPress={addProductToGitf}
                    onPressIn={add}
                >
                    <View style={styles.btnDangNhap}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textDangnhap}>Xác Nhận</Text>

                        </View>
                    </View>
                </TouchableOpacity>
            </LinearGradient>

        </View>
    )
}

export default GiftInfo

const styles = StyleSheet.create({
    textDangnhap: {
        marginTop: 1,
        marginLeft: 9,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 17,
        top: 10

    },
    btnDangNhap: {
        height: 50,
        width: 150,
        backgroundColor: '#FC3B3B',
        alignSelf: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 60,
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 15,
        paddingHorizontal: 10,

        borderColor: 'red'
    },

    text: {
        color: '#005082',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 25,
        left: 20
    },
    info: {
        color: '#005082',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        left: 72
    },
    title: {
        textAlign: 'center',
        color: '#005082',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    Container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
    }
})