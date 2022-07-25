import React, { useRef, useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal } from 'react-native';
import { pink300 } from 'react-native-paper/lib/typescript/styles/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigations/RootStackParams';
import Fonts from '../../../font/Fonts';
// type ProfileScreenRouteProp = RouteProp<RootStackParams, 'DoneScreen'>;
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack'
type Props = NativeStackScreenProps<RootStackParams>;
const ShowModalLoading = ({ modalVisible, setModalVisible, check }) => {
    const off = async () => {
        setModalVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>


                    <Text>Bạn có chắc muốn</Text>
                    <Text style={{ fontWeight: 'bold' }}>Đăng Xuất không</Text>
                    <TouchableOpacity onPress={check}>
                        <View style={styles.btnBosuutap2}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={styles.textBosuutap2}>Đăng Xuất</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={off}>
                        <View style={styles.btnBosuutap1}>
                            <View style={{ flexDirection: 'row' }}>

                                <Image style={styles.imgOTP1}
                                    source={require('../../../assets/images/imgDangnhap1.png')}></Image>
                                <Text style={styles.textBosuutap1}>Hủy</Text>
                                <Image style={styles.imgBosuutap1}
                                    source={require('../../../assets/images/imgDangnhap2.png')}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
};
const Collection = ({ route, navigation }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [quantity, setQuantity] = useState(0)

    const onNumberChange = (isAdd) => {
        if (isAdd == true) {
            setQuantity(quantity + 1)
        } else if (isAdd == false && quantity >= 1) {
            setQuantity(quantity - 1)
        }
    }
    const handleCheckValid = async () => {
        setModalVisible(true);
    };
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackGroud}
                resizeMode='contain'
                source={require('../../../assets/images//backgroudALL.png')}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home_Page')} >
                        <Image style={styles.imgBack}
                            source={require('../../../assets/images/Vector.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTheLe}>Bộ Sưu Tập</Text>
                </View>

                <TouchableOpacity onPress={handleCheckValid} >
                    <Image style={styles.logOut}
                        source={require('../../../assets/images/log_out.png')}></Image>
                </TouchableOpacity>
                <View>
                    <Image style={{ marginLeft: 190, marginVertical: 25 }}
                        resizeMode={'cover'}
                        source={require('../../../assets/images/icondiem.png')}
                    />
                    <Text style={styles.textdiem}>Số điểm hiện tại của bạn</Text>
                </View>
                <View style={styles.img3lon}>
                    <Image source={require('../../../assets/images/Pepsi.png')}></Image>

                    <Image source={require('../../../assets/images/lon1.png')}></Image>
                    <Image source={require('../../../assets/images/lon2.png')}></Image>
                </View>
                <View style={styles.textquantity}>
                    <Text style={styles.textquantity1}>1</Text>
                    <Text style={styles.textquantity1}>2</Text>
                    <Text style={styles.textquantity1}>3</Text>
                </View>
                <View style={styles.textinfo}>
                    <Text style={{ fontSize: 17, color: '#FFFFFF' }}>Đổi ngay bộ sưu tập <Text style={{ color: 'yellow' }}>AN - LỘC - PHÚC</Text></Text>
                    <Text style={{ fontSize: 17, color: '#FFFFFF' }}>để có cơ hội nhận ngay <Text style={{ color: 'yellow' }}>300 coins</Text> hoặc</Text>
                    <Text style={{ fontSize: 17, color: '#FFFFFF' }}>một <Text style={{ color: 'yellow' }}>phần quà may mắn</Text></Text>
                </View>
                <View style={styles.processQuantity}>
                    <View style={styles.quantityAction}>
                        <Text onPress={() => onNumberChange(false)} style={styles.removeAction}>-</Text>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Text onPress={() => onNumberChange(true)} style={styles.addAction}>+</Text>
                    </View>
                </View>
                <TouchableOpacity >
                    <View style={[styles.btnOTP, { backgroundColor: quantity > 0 ? '#FC3B3B' : '#8E8E8E' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/imgOTP1.png')}></Image>
                            <Text style={styles.textMaOTP}>Đổi Ngay</Text>
                            <Image style={styles.imgOTP2}
                                source={require('../../../assets/images/imgOTP2.png')}></Image>
                        </View>
                    </View>
                </TouchableOpacity>

            </ImageBackground>
            <ShowModalLoading
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    )
}

export default Collection

const styles = StyleSheet.create({
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
        marginTop: 30
    },
    btnBosuutap2: {
        height: 50,
        width: 200,
        backgroundColor: '#FC3B3B',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 30
    },
    textBosuutap1: {
        ...Fonts.h19,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 32
    },
    textBosuutap2: {
        ...Fonts.h20,
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
    imgOTP2: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 45
    },
    textMaOTP: {
        alignSelf: 'center',
        ...Fonts.h5,
        marginTop: 6,
        marginLeft: 16
    },
    imgOTP1: {
        height: 48,
        width: 50,
        borderRadius: 10
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
    quantity: {
        paddingHorizontal: 20,
        ...Fonts.h23,
    },
    addAction: {
        borderRadius: 20,
        width: 22.5,
        height: 22.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: '#FFFFFF',
        backgroundColor: 'red'
    },
    removeAction: {
        borderRadius: 20,
        width: 22.5,
        height: 22.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: '#FFFFFF',
        backgroundColor: '#005082'
    },
    quantityAction: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
    quantityText: {
        fontSize: 14,
        opacity: 0.6,

    },
    processQuantity: {

    },
    textinfo: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12
    },
    textquantity1: {
        ...Fonts.h23,
    },
    textquantity: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-around',
        marginHorizontal: 60,

    },
    img3lon: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-around',
        marginHorizontal: 60
    },
    textdiem: {
        ...Fonts.h22,
        textAlign: 'center'
    },
    logOut: {
        height: 30,
        width: 30,
        marginLeft: 370,
        marginTop: -22
    },
    textTheLe: {
        ...Fonts.h5,
        marginLeft: 90,
        marginTop: 60
    },
    imgBack: {
        height: 20,
        width: 10,
        marginTop: 55,
        marginLeft: 80
    },
    container: {
        flex: 1,
        backgroundColor: '#0063A7'
    },
    imgBackGroud: {
        width: windowWidth,
        height: windowHeight,
    },

})