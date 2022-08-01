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

const Mygif = ({ navigation }: { navigation: any }) => {
    const { onGetMyGiftById } = useContext(ProductContext);
    const { userInfo } = useContext(UserConText)
    const [db, setDb] = useState([])
    const [refeshing, setRefeshing] = useState(false)
    useEffect(async () => {
        const res = await onGetMyGiftById(userInfo.id);
        console.log('res', JSON.stringify(res));
        setDb(res)
    }, [])
    const onRefresh = () => {
        setRefeshing(true)

        setRefeshing(false)
    }
    const renderItem = ({ item }) => {
        const { image, name, quantity, sale, status, id } = item;
        return (

            <View style={styles.categoryContainer} >
                <View style={styles.imagerender}>
                    < Image
                        style={styles.image1}
                        resizeMode='cover'
                        source={{ uri: image }} />
                </View>
                < Image style={styles.imgsale}
                    resizeMode='cover'
                    source={sale} />
                <View>
                    <Text style={styles.textrender}>{name}</Text>
                    <Text style={styles.textquantity}>Trạng Thái : <Text style={[styles.textquantity, { color: status == "Đã Nhận" ? '#00A61B' : 'red' }]}>{status}</Text></Text>
                </View>

            </View >


        )
    }
    return (
        <View style={styles.container}>

            <ImageBackground
                style={styles.imgBackgroud}
                resizeMode='cover'
                source={require('../../../assets/images/backgroudALL.png')}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Gift')}>
                        <Image style={styles.imgBack}
                            source={require('../../../assets/images/Vector.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTheLe}>Chi tiết quà tặng</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', left: -22 }}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gift')}>
                        <Text style={styles.texttitle}>Đổi Quà</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} >
                        <Text style={styles.texttitle1}>Quà của tôi</Text>
                    </TouchableOpacity>

                </View>

                {db.length ?
                    <FlatList data={db}
                        renderItem={renderItem}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        refreshing={refeshing}
                        onRefresh={onRefresh} />
                    :
                    <View style={styles.textnoitem1}>
                        <Text style={styles.textnoitem}>Kho hàng còn trống !</Text>
                        <Text style={styles.textnoitem}>Hãy dùng coin để đổi quà</Text>
                    </View>
                }
            </ImageBackground>
        </View>
    )
}

export default Mygif

const styles = StyleSheet.create({
    textnoitem1: {
        justifyContent: 'center',
        paddingTop: 250
    },
    textnoitem: {
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold'
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
        borderRadius: 20,
        height: 125,
        width: 151
    },
    categoryContainer: {
        height: 190,
        backgroundColor: '#EEAD00',
        width: '42%',
        alignItems: 'center',
        left: 10,
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
