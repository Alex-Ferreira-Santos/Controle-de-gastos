import React, { Component} from 'react'
import {View, Text} from 'react-native'
import {spent} from '../styles/index'

class Spent extends Component {
    render(){
        return (
            <View style={spent.container}>
                <View>
                    <Text style={spent.date}>
                        {this.props.data}
                    </Text>
                </View>
                <View style={spent.containerCenter}>
                    <Text style={spent.name}>
                        {this.props.nome}
                    </Text>
                    <Text>
                        R$ {this.props.valor}
                    </Text>
                </View>
                <View style={spent.containerRight}>
                    <View>
                        <Text style={spent.editar}>Editar</Text>
                    </View>
                    <View>
                        <Text style={spent.deletar}>Excluir</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Spent