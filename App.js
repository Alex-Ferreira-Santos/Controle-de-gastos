import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'

export default function App() {
  return (
    <View style={{flex:1}}>
      <Header titulo='Controle de Gastos' subtitulo='0,00'>

      </Header>

      <StatusBar style="auto" />
    </View>
  );
}
