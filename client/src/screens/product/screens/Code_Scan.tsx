import React, { useState, useEffect, useContext } from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal, ToastAndroid } from 'react-native';
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
import { ProductContext } from '../ProductConText';
import { UserConText } from '../../user/UserContext';

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
const ShowModalQua = ({ modalqua, setModalqua }) => {
    const { userInfo } = useContext(UserConText)
    const play = userInfo.numberexchange + userInfo.numberfree

    const off = async () => {
        setModalqua(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalqua}
            onRequestClose={() => {
                setModalqua(false);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <TouchableOpacity onPress={off}>
                        <Image style={styles.btnclose}
                            source={require('../../../assets/images/Buttonclose.png')}></Image>
                    </TouchableOpacity>
                    <Image
                        source={require('../../../assets/images/monqua.png')}></Image>
                    <Text style={{ color: '#2D2D2D', fontWeight: 'bold', fontSize: 17, left: 10, marginTop: 20 }}>Bạn nhận được </Text>

                    <Text style={{ color: '#005082', fontWeight: 'bold', fontSize: 100, left: 15 }}>5 </Text>

                    <Text style={{ color: '#000000', fontSize: 17, left: 6 }}>Lượt Chơi </Text>

                    <Text style={{ color: '#000000', fontSize: 17, marginTop: 10 }}>Bạn đang có <Text style={{ fontWeight: 'bold' }}>{play}</Text> lượt chơi </Text>
                    <TouchableOpacity onPress={off}>
                        <View style={styles.btnmodal}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textmodalplay}>Scan tiếp</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={off}>
                        <View style={styles.btnmodal}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textmodalplay}>Chơi ngay</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </Modal>
    );
};
const Code_Scan = ({ route, navigation }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalqua, setModalqua] = useState(false);
    const { onUpdatePlay } = useContext(ProductContext);
    const { userInfo } = useContext(UserConText)
    const addPlayNumber = async () => {
        userInfo.numberexchange = userInfo.numberexchange + 5
        console.log(userInfo.numberexchange);
        const update = await onUpdatePlay(userInfo.id, userInfo.numberexchange);
        if (update) {
            ToastAndroid.show('Đã thêm vào đơn hàng', ToastAndroid.BOTTOM)
        } else {
            ToastAndroid.show('Đã thêm vào đơn hàng', ToastAndroid.BOTTOM)
        }

    }

    const handleCheckValid = async () => {
        setModalVisible(true);
    };
    const handcheckqua = async () => {
        addPlayNumber();
        setModalqua(true);
    };
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackGroud}
                resizeMode='cover'
                source={require('../../../assets/images//backgroudALL.png')}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home_Page')} >
                        <Image style={styles.imgBack}
                            source={require('../../../assets/images/Vector.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTheLe}>Quét mã</Text>
                </View>

                <TouchableOpacity onPress={handleCheckValid} >
                    <Image style={styles.logOut}
                        source={require('../../../assets/images/log_out.png')}></Image>
                </TouchableOpacity>

                <Image style={{ width: 270, height: 500, marginTop: 30, left: 55 }}
                    resizeMode='cover'
                    source={require('../../../assets/images/bill.png')}></Image>
                <TouchableOpacity onPress={handcheckqua}>
                    <View style={styles.btnOTP}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/imgDangnhap1.png')}></Image>
                            <Text style={styles.textMaOTP}>Quét mã</Text>
                            <Image style={styles.imgOTP2}
                                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
                        </View>
                    </View>
                </TouchableOpacity>

            </ImageBackground>
            <ShowModalLoading
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            <ShowModalQua
                modalqua={modalqua}
                setModalqua={setModalqua}
                userInfo
            />
        </View>
    )
}

export default Code_Scan

const styles = StyleSheet.create({

    textmodalplay: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 8,
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
        height: 40,
        width: 150,
        backgroundColor: '#FC3B3B',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 10,

    },
    btnclose: {
        height: 20,
        width: 20,
        position: 'absolute',
        left: 100,
        top: -20

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
        marginLeft: 34,
        left: 5.4
    },
    textMaOTP: {
        alignSelf: 'center',
        ...Fonts.h5,
        marginTop: 6,
        marginLeft: 37,
        textAlign: 'center'
    },
    imgOTP1: {
        height: 48,
        width: 50,
        borderRadius: 10
    },
    btnOTP: {
        height: 50,
        width: 250,
        backgroundColor: '#FC3B3B',
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
        marginLeft: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#0063A7'
    },
    imgBackGroud: {
        width: windowWidth,
        height: 800,
    },

})