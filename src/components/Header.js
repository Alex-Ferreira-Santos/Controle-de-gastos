import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Header extends Component {
    render() {
        return (
            <View style={header.background}>
                <View style={header.container}>
                    <Text style={header.title}>{this.props.titulo}</Text>
                    <Text style={header.subtitulo}>Saldo: R${this.props.subtitulo}</Text>
                </View>
            </View>
        )
    }
}

export default Header