import { StatusBar } from 'expo-status-bar';
import React, { Component}from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './src/components/Header'
import {form} from './src/styles/index'
import Spent from './src/components/Spent'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      spents:[
        {
          id: Math.random(),
          nome: 'Mercado',
          valor: '30,00'
        }, 
        {
          id: Math.random(),
          nome: 'Farmacia',
          valor: '20,00'
        }, 
        {
          id: Math.random(),
          nome: 'ifood',
          valor: '140,00'
        }, 
      ],
      id:0,
      nomeDigitado:'',
      valorDigitado:'',
    }
    this.addSpent = this.addSpent.bind(this)
  }
  
  addSpent = newSpend => {
    const vspents = [...this.state.spents]

    vspents.push({
      id: Math.random(),
      nome: this.state.nomeDigitado,
      valor: this.state.valorDigitado
    })
    this.setState({spents: vspents})
  }

  render(){
    return (
      <View style={{flex:1}}>
        <Header titulo="Controle de Gastos" subtitulo='0,00'/>
        <View style={form.container}>
  
          <Text style={form.texts}>Gasto:</Text>
          <TextInput placeholder="Informe o nome do gasto" style={form.inputs} onChangeText={(nomeDigitado) => this.setState({nomeDigitado: nomeDigitado})}/>
  
          <Text style={form.texts}>Valor:</Text>
          <TextInput placeholder="Informe o valor" style={form.inputs} onChangeText={(valorDigitado) => this.setState({valorDigitado: valorDigitado})}/>
  
          <Button title="Pronto" onPress={this.addSpent}/>
  
          <FlatList data={this.state.spents} 
          keyExtractor={item => `${item.id}`} 
          renderItem={({item}) => <Spent {...item}/>}
          />
  
        </View>
        
      </View>
    );
  }
}
