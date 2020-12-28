import {StyleSheet, Dimensions} from 'react-native'

var width = Dimensions.get('window').width

const header = StyleSheet.create({
    background:{
        width: width,
        height: 80,
        backgroundColor: '#0091ea',
    },
    container: {
        left:16,
    },
    title: {
        fontSize: 32,
        color: "white",
        fontWeight:"bold",
    },
    subtitle: {
        fontSize: 16,
        color: "white",
        fontWeight: "500"
    }
})

export {header}