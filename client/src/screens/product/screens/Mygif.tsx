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

const Mygif = ({ navigation }: { navigation: any }) => {
    const renderItem = ({ item }) => {
        const { image, name, quantity, sale, status, id } = item;
        return (
            <View style={styles.categoryContainer}>
                <View style={styles.imagerender}>
                    < Image
                        resizeMode='cover'
                        source={image} />

                </View>
                < Image style={styles.imgsale}
                    resizeMode='cover'
                    source={sale} />
                <View>
                    <Text style={styles.textrender}>{name}</Text>
                    <Text style={styles.textquantity}>Trạng Thái : <Text style={[styles.textquantity, { color: status == "Đã Nhận" ? '#00A61B' : 'red' }]}>{status}</Text></Text>
                </View>

            </View>
        )
    }
    return (
        <View style={styles.container}>

            <ImageBackground
                style={styles.imgBackgroud}
                resizeMode='contain'
                source={require('../../../assets/images/backgroudALL.png')}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Gift')}>
                        <Image style={styles.imgBack}
                            source={require('../../../assets/images/Vector.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTheLe}>Chi Tiết Qùa Tặng</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gift')}>
                        <Text style={styles.texttitle}>Đổi Quà</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} >
                        <Text style={styles.texttitle1}>Quà của tôi</Text>
                    </TouchableOpacity>

                </View>

                <FlatList data={data}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={item => item.id} />
            </ImageBackground>
        </View>
    )
}

export default Mygif

const styles = StyleSheet.create({
    imgsale: {
        position: 'absolute',
        width: 50,
        height: 30,
        left: 104
    },
    btnBosuutap2: {
        height: 30,
        width: 100,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 15
    },
    textBosuutap2: {
        fontSize: 12,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 5
    },
    textquantity: {
        justifyContent: 'center',
        color: '#005082',
        textAlign: 'center',
        marginTop: 2,
        fontSize: 10
    },
    textrender: {
        justifyContent: 'center',
        color: '#005082',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    },
    imagerender: {
        backgroundColor: 'white',
        borderRadius: 20
    },
    categoryContainer: {
        height: 190,
        backgroundColor: '#EEAD00',
        width: '32%',
        alignItems: 'center',
        left: 70,
        margin: 10,
        borderRadius: 20,


    },
    textdiem: {
        ...Fonts.h22,
        textAlign: 'center',
        marginBottom: 20,
        left: 10
    },
    texttitle: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 13,
        color: '#D02027',
        fontWeight: 'bold',
        fontSize: 15
    },
    button: {
        height: 50,
        backgroundColor: '#FFFFFF',
        width: '30%',
        justifyContent: 'center',
        textAlign: 'center',
        left: 100,
        flexDirection: 'row',
        top: 40,
        marginBottom: 55

    },
    texttitle1: {
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center',
        padding: 13,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    button1: {
        height: 50,
        backgroundColor: '#D02027',
        width: '30%',
        justifyContent: 'center',
        textAlign: 'center',
        left: 100,
        flexDirection: 'row',
        top: 40,
        marginBottom: 55

    },
    container: {
        flex: 1,
        backgroundColor: '#0063A7'
    },
    imgBackgroud: {
        width: windowWidth,
        height: windowHeight,
    },
    imgBack: {
        height: 18,
        width: 10,
        marginTop: 50,
        marginLeft: 80
    },
    textTheLe: {
        ...Fonts.h7,
        marginLeft: 60,
        marginTop: 48
    },
    viewText: {
        height: 1340,
        width: 350,
        alignSelf: 'center',
        marginTop: 25,
        padding: 10
    },
    text: {
        ...Fonts.h8,
        textAlign: 'justify'
    },
    text1: {
        ...Fonts.h8,
        marginTop: 15,
        textAlign: 'justify',
        color: '#FFFFFF'
    }

});

var data = [
    {
        id: 1,
        "image": require('../../../assets/images/item.png'),
        "sale": require('../../../assets/images/quantity2.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Đã Nhận",
        "quantity": 600
    },
    {
        id: 2,
        "image": require('../../../assets/images/AokhoacPepsi.png'),
        "sale": require('../../../assets/images/quantity2.png'),
        "name": "Pepsi Jacket",
        "status": "Chưa Nhận",
        "quantity": 10
    },
    {
        id: 3,
        "image": require('../../../assets/images/TuiXachPepsi.png'),
        "sale": require('../../../assets/images/quantity1.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Chưa Nhận",
        "quantity": 20
    },
    {
        id: 4,
        "image": require('../../../assets/images/BinhnuocPepsi.png'),
        "sale": require('../../../assets/images/quantity1.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Đã Nhận",
        "quantity": 100
    },
    {
        id: 5,
        "image": require('../../../assets/images/AokhoacPepsi.png'),
        "sale": require('../../../assets/images/quantity2.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Đã Nhận",
        "quantity": 630
    },
    {
        id: 6,
        "image": require('../../../assets/images/BinhnuocPepsi.png'),
        "sale": require('../../../assets/images/quantity1.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Đã Nhận",
        "quantity": 200
    },
    {
        id: 7,
        "image": require('../../../assets/images/item.png'),
        "sale": require('../../../assets/images/quantity1.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Đã Nhận",
        "quantity": 600
    },
    {
        id: 8,
        "image": require('../../../assets/images/AokhoacPepsi.png'),
        "sale": require('../../../assets/images/quantity2.png'),
        "name": "Pepsi Jacket",
        "status": "Chưa Nhận",
        "quantity": 10
    },
    {
        id: 9,
        "image": require('../../../assets/images/TuiXachPepsi.png'),
        "sale": require('../../../assets/images/quantity2.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Chưa Nhận",
        "quantity": 20
    },
    {
        id: 10,
        "image": require('../../../assets/images/BinhnuocPepsi.png'),
        "sale": require('../../../assets/images/quantity1.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Đã Nhận",
        "quantity": 100
    },
    {
        id: 11,
        "image": require('../../../assets/images/AokhoacPepsi.png'),
        "sale": require('../../../assets/images/quantity2.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Đã Nhận",
        "quantity": 630
    },
    {
        id: 12,
        "image": require('../../../assets/images/BinhnuocPepsi.png'),
        "sale": require('../../../assets/images/quantity1.png'),
        "name": "Pepsi Bucket Hat",
        "status": "Đã Nhận",
        "quantity": 200
    }
]