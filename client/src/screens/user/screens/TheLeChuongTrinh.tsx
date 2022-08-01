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
const TheLeChuongTrinh = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>

            <ImageBackground
                style={styles.imgBackgroud}
                resizeMode='cover'
                source={require('../../../assets/images/backgroudThele.png')}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Image style={styles.imgBack}
                            source={require('../../../assets/images/Vector.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.textTheLe}>Thể lệ chương trình</Text>
                </View>
                <ScrollView>
                    <View style={styles.viewText}>

                        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.</Text>
                        <Text style={styles.text1}>Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.</Text>
                        <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.</Text>
                        <Text style={styles.text1}>Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.</Text>
                        <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.</Text>
                        <Text style={styles.text1}>Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.</Text>
                        <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0063A7'
    },
    imgBackgroud: {
        width: 360,
        height: 800
    },
    imgBack: {
        height: 18,
        width: 10,
        marginTop: 20,
        marginLeft: 30
    },
    textTheLe: {
        ...Fonts.h7,
        marginLeft: 60,
        marginTop: 18
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

export default TheLeChuongTrinh;