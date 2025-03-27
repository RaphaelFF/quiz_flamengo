import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Logo() {
    return (
        <SafeAreaView>
            <Text style={styles.primario}>FLAMENGO</Text>
            <Text style={styles.segundario}>O melhor time do Mundo!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    primario: {
        fontFamily: 'SOLARSPACEDEMO-Regular',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    segundario: {
        fontFamily: 'SPACEMISSION',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
})
