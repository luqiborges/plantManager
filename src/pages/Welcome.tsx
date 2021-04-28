import React from 'react';
import { 
    SafeAreaView, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableOpacity, 
    Dimensions 
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import imgWatering from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Feather } from '@expo/vector-icons';


export function Welcome(){
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie{'\n'}suas plantas de{'\n'}forma fácil
            </Text>

            <Image 
                source={imgWatering} 
                style={styles.image}
                resizeMode='contain'
            />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={handleStart}>
                <Feather name="chevron-right" style={styles.buttonIcon}/> 
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginBottom: 40,
        marginTop: 16,
        fontFamily: fonts.heading,
        lineHeight: 34,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 40,
        color: colors.heading,
        marginBottom: 38,
        marginTop: 38,
        fontFamily: fonts.text,
    },
    image:{
        height: Dimensions.get('window').width * 0.7,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 18,
        marginTop: 14,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32,
    },
});