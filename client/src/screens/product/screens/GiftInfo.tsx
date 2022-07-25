import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, FlatList } from 'react-native';
import { scale } from '../../../Scale';
import Fonts from '../../../font/Fonts';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigations/RootStackParams';
// type ProfileScreenRouteProp = RouteProp<RootStackParams, 'DoneScreen'>;
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
type Props = NativeStackScreenProps<RootStackParams>;
import { LinearGradient } from 'expo-linear-gradient';

const GiftInfo = ({ route }) => {


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
                    >
                    </TextInput>
                </View>
                <Text style={styles.text}>Số điện thoại </Text>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder='số điện thoại'
                    >
                    </TextInput>
                </View>
                <Text style={styles.text}>Địa chỉ </Text>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder='địa chỉ'
                    >
                    </TextInput>
                </View>
                <Text style={styles.text}>Ghi chú </Text>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder='Ghi chú(nếu có)'
                    >
                    </TextInput>
                </View>
                <TouchableOpacity >
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
        ...Fonts.h9,
        marginTop: 15,
        marginLeft: 15,
        justifyContent: 'center',
        textAlign: 'center',

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
        width: '70%',
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
        left: 72
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