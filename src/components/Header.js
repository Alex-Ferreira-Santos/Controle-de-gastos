import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {header} from '../styles/index'

class Header extends Component {
    render() {
        return (
            <View style={header.background}>
                <View style={header.container}>
                    <Text style={header.title}>
                        {this.props.titulo}
                    </Text>
                    <Text style={header.subtitle}>
                        Saldo: R${this.props.subtitle}
                    </Text>
                </View>
            </View>
        )
    }
}

export default Header