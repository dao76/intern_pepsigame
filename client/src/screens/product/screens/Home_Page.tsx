import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../../navigations/RootStackParams';
import Fonts from '../../../font/Fonts';

// type ProfileScreenRouteProp = RouteProp<RootStackParams, 'DoneScreen'>;
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack'
import { LinearGradient } from 'expo-linear-gradient';
import { ToastAndroid } from 'react-native';
type Props = NativeStackScreenProps<RootStackParams>;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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

const Home_Page = ({ route, navigation }: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [play, setPlay] = useState('2');

    const handleCheckValid = async () => {
        setModalVisible(true);
    };



    const playgame = () => {
        if (play > 0) {
            setPlay(play - 1)
            ToastAndroid.show('oke chơi đi', ToastAndroid.BOTTOM)
        } else {
            ToastAndroid.show('Bạn Đã hết Lượt Chơi', ToastAndroid.BOTTOM)
        }

    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackGroudHome}
                resizeMode='contain'
                source={require('../../../assets/images/BgHomePage.png')}
            >
                <TouchableOpacity onPress={handleCheckValid}>
                    <Image style={styles.logOut}
                        source={require('../../../assets/images/log_out.png')}></Image>
                </TouchableOpacity>
                <Image style={styles.imgLan}
                    source={require('../../../assets/images/lan.png')}></Image>
                <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
                    <Text style={styles.textHuongDan}>Hướng dẫn</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={playgame}>
                    <View style={styles.btnOTP}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/hoamai.png')}></Image>
                            <View style={{ bottom: 32 }}>
                                <Text style={styles.textMaOTP}>Chơi ngay</Text>
                                <Text style={styles.textplay}>Bạn có tổng cộng<Text style={{ color: 'yellow' }}> {play} </Text>lượt chơi</Text>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Code_Scan')}>
                    <View style={styles.btnQuetMa}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/imgDangnhap1.png')}></Image>
                            <Text style={styles.textQuetMa}>Quét mã</Text>
                            <Image style={styles.imgDangnhap2}
                                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Collection')}>
                    <View style={styles.btnBosuutap}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/imgDangnhap1.png')}></Image>
                            <Text style={styles.textBosuutap}>Bộ sưu tập</Text>
                            <Image style={styles.imgBosuutap}
                                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Gift')}>
                    <View style={styles.btnQuatang}>
                        <View style={{ flexDirection: 'row' }}>

                            <Image style={styles.imgOTP1}
                                source={require('../../../assets/images/imgDangnhap1.png')}></Image>
                            <Text style={styles.textQuatang}>Chi tiết quà tặng</Text>
                            <Image style={styles.imgQuatang}
                                source={require('../../../assets/images/imgDangnhap2.png')}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                <Image style={styles.imgfooter1}
                    source={require('../../../assets/images/icon111111.png')}></Image>
            </ImageBackground>

            <ShowModalLoading
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>

    )
}

const styles = StyleSheet.create({
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
        height: windowHeight,
    },
    logOut: {
        height: 30,
        width: 30,
        marginLeft: 370,
        marginTop: 30
    },
    imgLan: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 100
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
        marginLeft: 37
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

export default Home_Page;