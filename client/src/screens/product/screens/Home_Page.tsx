import React, { useContext, useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal, ToastAndroid } from 'react-native';
import Fonts from '../../../font/Fonts';
import { UserConText } from '../../user/UserContext';
import { ProductContext } from '../ProductConText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
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


                    <Text style={{ color: '#0063A7' }}>Bạn có chắc muốn</Text>
                    <Text style={{ fontWeight: 'bold', color: '#0063A7' }}>Đăng Xuất <Text style={{ fontWeight: 'normal', color: '#0063A7' }}>không</Text></Text>
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
const ShowModalPlay = ({ modalplay, setModaplay }) => {
    const navigation = useNavigation();
    const { userInfo } = useContext(UserConText)
    console.log('userInfo', JSON.stringify(userInfo));
    const [refeshing, setRefeshing] = useState(false)
    const { onUpdatePlay, onUpdateFreeNumber } = useContext(ProductContext);
    const playfree = async () => {
        if (userInfo.numberfree > 0) {


            userInfo.numberfree = userInfo.numberfree - 1
            await onUpdateFreeNumber(userInfo.id, userInfo.numberfree);
            navigation.replace('Mainplay');
        }
    }
    const playnumberexchange = async () => {


        // console.log(userInfo.numberexchange);
        // userInfo.numberexchange = userInfo.numberexchange - 1

        // await onUpdatePlay(userInfo.id, userInfo.numberexchange);

        navigation.replace('Mainplay');

    }
    const xtac = async () => {

        setModaplay(false);
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalplay}
            onRequestClose={() => {
                setModaplay(false);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <TouchableOpacity onPress={xtac}>
                        <Image style={styles.btnclose}
                            source={require('../../../assets/images/Buttonclose.png')}></Image>
                    </TouchableOpacity>
                    <Text style={{ color: '#D02027', fontWeight: 'bold', fontSize: 19 }}>Bạn muốn sử dụng</Text>
                    <Text style={{ color: '#D02027', fontWeight: 'bold', fontSize: 19 }}>lượt chơi nào? </Text>
                    <TouchableOpacity onPress={playfree}
                    >
                        <View style={[styles.btnmodal, { backgroundColor: userInfo.numberfree > 0 ? '#FC3B3B' : '#8E8E8E' }]}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textmodalplay}>Lượt chơi miễn phí</Text>
                                <Text style={styles.textmodalplay1}>bạn còn <Text style={{ color: 'yellow' }}>{userInfo.numberfree}</Text> lượt chơi</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={playnumberexchange}
                    >
                        <View style={[styles.btnmodal, { backgroundColor: userInfo.numberexchange > 0 ? '#FC3B3B' : '#8E8E8E' }]}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textmodalplay}>Lượt chơi quy đổi</Text>
                                <Text style={styles.textmodalplay1}>bạn còn <Text style={{ color: 'yellow' }}>{userInfo.numberexchange}</Text> lượt chơi</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );
};
const Home_Page = ({ route }: Props) => {
    const { userInfo } = useContext(UserConText)
    const navigation = useNavigation();
    console.log('userInfo', JSON.stringify(userInfo));
    const [refeshing, setRefeshing] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalplay, setModaplay] = useState(false);
    const onRefresh = () => {
        setRefeshing(true)

        setRefeshing(false)
    }
    const play = userInfo.numberexchange + userInfo.numberfree
    const handleCheckValid = async () => {
        setModalVisible(true);
    };
    const handcheckplay = async () => {
        setModaplay(true);
    };
    return (
        <View style={styles.container}
            refreshing={refeshing}
            onRefresh={onRefresh}>
            <ImageBackground style={styles.imgBackGroudHome}
                resizeMode='cover'
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
                <TouchableOpacity onPress={handcheckplay}>
                    <View style={styles.btnOTP}>
                        <View style={styles.viewbutton}>
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
            <ShowModalPlay
                modalplay={modalplay}
                setModaplay={setModaplay}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    btnclose: {
        height: 20,
        width: 20,
        position: 'absolute',
        left: 100,
        top: -20
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
        // backgroundColor: '#FC3B3B',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 10,

    },
    imgfooter1: {
        marginTop: 56,
        width: 165
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
        height: 800,
        // width: 455,
        // width: windowHeight,
        alignItems: 'center',

    },
    logOut: {
        height: 30,
        width: 30,
        marginLeft: 300,
        marginTop: 30,
        top: 30
    },
    imgLan: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 90,
        top: -10
    },
    textHuongDan: {
        ...Fonts.h11,
        textAlign: 'center',
        margin: -15
    },
    btnOTP: {
        height: 70,
        width: 270,
        backgroundColor: '#C41920',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 29
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
        marginTop: 20
    },
    textQuetMa: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 40,
        left: 10
    },
    imgDangnhap2: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 56.8
    },
    btnBosuutap: {
        height: 50,
        width: 270,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 20
    },
    textBosuutap: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 32,
        left: 10
    },
    imgBosuutap: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 45.9
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
        marginTop: 20
    },
    textQuatang: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 5,
        left: 10
    },
    imgQuatang: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 24.7
    }
});

export default Home_Page;