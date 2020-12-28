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

const form = StyleSheet.create({
    container:{
        margin:20,
    },
    texts:{
        color: "#0091ea",
        fontSize: 16,
    },
    inputs: {
        borderBottomWidth: 1,
        borderBottomColor: "#0091ea",
        marginBottom:20,
    }
})

const spent = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        borderBottomColor: "#0091ea",
        borderBottomWidth: 1,
    },
    containerCenter: {
        flex: 3,
    },
    containerRight: {
        flex: 2,
        flexDirection: "row",
        right:32,
    },
    name: {
        fontWeight: "bold"
    },
    date:{
        fontSize: 18,
        marginRight: 15,
        color: "#40c4ff",
    },
    editar: {
        color: "steelblue",
    },
    deletar:{
        color: "tomato"
    }
    
})

export {header, form, spent}