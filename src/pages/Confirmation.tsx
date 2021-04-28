import React from 'react';
import { StyleSheet, View, Text, SafeAreaView} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params{
    title: string,
    subtitle: string,
    buttonTitle: string,
    icon: 'smile' | 'hug',
    nextScreen: string,
}

const emojis = {hug: '🤗', smile: '😁'};

export function Confirmation(){
    const navigation = useNavigation();
    const routes = useRoute();

    const { title, subtitle, buttonTitle, icon, nextScreen } = routes.params as Params;
    
    function handleMoveOn(){
        navigation.navigate(nextScreen);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.emoji}>{emojis[icon]}</Text>

                <Text style={styles.title}>{title}</Text>

                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

                <View style={styles.footer}>
                    <Button title={buttonTitle} onPress={handleMoveOn}/>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        textAlign: 'center',
        lineHeight: 38,
        marginTop: 48,
    },
    subtitle: {
        marginTop: 16,
        fontSize: 17,
        fontFamily: fonts.text,
        textAlign: 'center',
        color: colors.heading,
    },
    emoji: {
        fontSize: 78,
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 50,
    }
});
