import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions } from 'react-native';
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
const Guide = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>

            <ImageBackground
                style={styles.imgBackgroud}
                resizeMode='cover'
                source={require('../../../assets/images/backgroudALL.png')}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home_Page')}>
                        <Image style={styles.imgBack}
                            source={require('../../../assets/images/Vector.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTheLe}>Hướng dẫn</Text>
                </View>
                <ScrollView>
                    <View style={styles.viewText}>
                        <Image style={styles.img}
                            source={require('../../../assets/images/guide1.png')}></Image>
                        <Text style={styles.text}> <Text style={{ fontWeight: 'bold' }}>Bước 1:</Text>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in pulvinar feugiat rutrum libero volutpat</Text>
                        <Image style={styles.img}
                            source={require('../../../assets/images/guide2.png')}></Image>
                        <Text style={styles.text}> <Text style={{ fontWeight: 'bold' }}>Bước 2:</Text>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in pulvinar feugiat rutrum libero volutpat</Text>
                    </View>

                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Guide

const styles = StyleSheet.create({
    img: {
        width: '80%',
        height: '20%',
        marginTop: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#0063A7'
    },
    imgBackgroud: {

        height: 800,

    },
    imgBack: {
        height: 18,
        width: 10,
        marginTop: 20,
        marginLeft: 40
    },
    textTheLe: {
        ...Fonts.h7,
        marginLeft: 90,
        marginTop: 18
    },
    viewText: {
        height: 1040,
        width: 350,
        alignSelf: 'center',
        marginTop: 25,
        padding: 10,
        alignItems: 'center',

    },
    text: {
        color: '#FFFFFF',
        textAlign: 'justify',
        fontSize: 20,
        padding: 10
    },
    text1: {
        fontSize: 25,
        marginTop: 15,
        textAlign: 'justify',
        color: '#FFFFFF'
    }
})