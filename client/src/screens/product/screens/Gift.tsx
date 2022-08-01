import React, { useContext, useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, FlatList } from 'react-native';
import { scale } from '../../../Scale';
import Fonts from '../../../font/Fonts';
const price1 = require('../../../assets/images/price.png')
import { UserConText } from '../../user/UserContext';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigations/RootStackParams';
// type ProfileScreenRouteProp = RouteProp<RootStackParams, 'DoneScreen'>;
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
type Props = NativeStackScreenProps<RootStackParams>;
import { ProductContext } from '../ProductConText';

const Gift = ({ navigation }) => {
    const [refeshing, setRefeshing] = useState(false)



    const { userInfo } = useContext(UserConText)

    const { getproducts } = useContext(ProductContext);
    const [db, setDb] = useState([])

    useEffect(async () => {
        const res = await getproducts();
        setDb(res)
    }, [])

    const onRefresh = () => {
        setRefeshing(true)

        setRefeshing(false)
    }
    const renderItem = ({ item }) => {
        const { image, name, quantity, price, id } = item;

        return (
            <View style={styles.categoryContainer}>
                <View style={styles.imagerender}>
                    < Image
                        style={styles.image1}
                        resizeMode='cover'
                        source={{ uri: image }} />

                </View>
                < Image style={styles.imgsale}
                    resizeMode='cover'
                    source={price1} />
                <Text style={styles.textprice}>{price}</Text>
                <View>
                    <Text style={styles.textrender}>{item.name}</Text>
                    <Text style={styles.textquantity}>còn lại : {item.quantity}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('GiftInfo', { item })}>
                        <View style={styles.btnBosuutap2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                                <Text style={styles.textBosuutap2}>Đổi quà</Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    return (
        <View style={styles.container}
            refreshing={refeshing}
            onRefresh={onRefresh}>

            <ImageBackground
                style={styles.imgBackgroud}
                resizeMode='cover'
                source={require('../../../assets/images/backgroudALL.png')}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home_Page')}>
                        <Image style={styles.imgBack}
                            source={require('../../../assets/images/Vector.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTheLe}>Chi tiết quà tặng</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', left: -22 }}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.texttitle}>Đổi Quà</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Mygif')}>
                        <Text style={styles.texttitle1}>Quà của tôi</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Image style={{ marginLeft: 135, marginVertical: 25, marginTop: 60 }}
                        resizeMode={'cover'}
                        source={require('../../../assets/images/Coinuser.png')}
                    />
                    <Text style={styles.textcoin}>{userInfo.coin}</Text>

                    <Text style={styles.textdiem}>Số điểm hiện tại của bạn</Text>
                </View>
                <FlatList data={db}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={item => item.id} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    textprice: {
        position: "absolute",
        color: '#FFFFFF',
        fontWeight: 'bold',
        left: 120,
        top: 7
    },
    image1: {
        width: 100,
        height: 100,
        left: 25
    },
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
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 2
    },
    textrender: {
        justifyContent: 'center',
        color: '#FFDD00',
        textAlign: 'center',
        marginTop: 10
    },
    imagerender: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 125,
        width: 151
    },
    categoryContainer: {
        height: 240,
        backgroundColor: 'red',
        width: '42%',
        alignItems: 'center',
        left: 10,
        margin: 10,
        borderRadius: 20,

    },
    textdiem: {
        ...Fonts.h22,
        textAlign: 'center',
        marginBottom: 10,
        left: -5,
        top: -20
    },
    textcoin: {
        top: -90,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 23,
        color: 'white',
        left: 5,
    },
    texttitle: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 13,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15
    },
    button: {
        height: 50,
        backgroundColor: '#D02027',
        width: '30%',
        justifyContent: 'center',
        textAlign: 'center',
        left: 100,
        flexDirection: 'row',
        top: 40,

    },
    texttitle1: {
        fontSize: 15,
        justifyContent: 'center',
        textAlign: 'center',
        padding: 13,
        color: '#D02027',
        fontWeight: 'bold'
    },
    button1: {
        height: 50,
        backgroundColor: '#FFFFFF',
        width: '30%',
        justifyContent: 'center',
        textAlign: 'center',
        left: 100,
        flexDirection: 'row',
        top: 40,

    },
    container: {
        flex: 1,
        backgroundColor: '#0063A7'
    },
    imgBackgroud: {

        height: 800
    },
    imgBack: {
        height: 18,
        width: 10,
        marginTop: 50,
        marginLeft: 80,
        left: -50
    },
    textTheLe: {
        ...Fonts.h7,
        marginLeft: 25,
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
// var data = [
//     {
//         id: 1,
//         "image": require('../../../assets/images/item.png'),
//         "sale": require('../../../assets/images/Sale1.png'),
//         "name": "Pepsi Bucket Hat",
//         "quantity": 600
//     },
//     {
//         id: 2,
//         "image": require('../../../assets/images/AokhoacPepsi.png'),
//         "sale": require('../../../assets/images/Sale1.png'),
//         "name": "Pepsi Hat",
//         "quantity": 10
//     },
//     {
//         id: 3,
//         "image": require('../../../assets/images/TuiXachPepsi.png'),
//         "sale": require('../../../assets/images/Sale1.png'),
//         "name": "Pepsi Bucket Hat",
//         "quantity": 20
//     },
//     {
//         id: 4,
//         "image": require('../../../assets/images/BinhnuocPepsi.png'),
//         "sale": require('../../../assets/images/Sale1.png'),
//         "name": "Pepsi Bucket Hat",
//         "quantity": 100
//     },
//     {
//         id: 5,
//         "image": require('../../../assets/images/AokhoacPepsi.png'),
//         "sale": require('../../../assets/images/Sale1.png'),
//         "name": "Pepsi Bucket Hat",
//         "quantity": 630
//     },
//     {
//         id: 6,
//         "image": require('../../../assets/images/BinhnuocPepsi.png'),
//         "sale": require('../../../assets/images/Sale1.png'),
//         "name": "Pepsi Bucket Hat",
//         "quantity": 200
//     }
// ]
export default Gift;