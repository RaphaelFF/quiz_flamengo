import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Enunciado from './Enunciado'
import Opcao from './Opcao'
import PerguntaModel from '@/data/model/Pergunta'

export interface PerguntaProps {
  pergunta: PerguntaModel
  opcaoSelecionada: (indice: number) => void
  progresso: string // Adiciona a propriedade de progresso (ex.: "1/10")
  respostaSelecionada: number | null
  respostaCorreta: number | null
  mostrarRespostaCorreta: boolean
  avançarParaProximaPergunta: () => void
}

export default function Pergunta(props: PerguntaProps) {
  return (
    <View style={{ gap: 25 }} >
      {/* Exibe o progresso */}
      <Text style={styles.progresso}>{props.progresso}</Text>
      <Enunciado enunciado={props.pergunta.enunciado} />
      <View style={{ gap: 15 }}>
        {props.pergunta.opcoes.map((opcao, indice) => (
          <Opcao
            key={indice}
            indice={indice}
            texto={opcao}
            onPress={() => props.opcaoSelecionada(indice)}
            selecionada={props.respostaSelecionada === indice}
            correta={props.mostrarRespostaCorreta && props.respostaCorreta === indice}
          />
        ))}
      </View >
      {props.mostrarRespostaCorreta && (
  <TouchableOpacity
    style={{
      backgroundColor: "#FFFFFF",
      marginTop: 20,
      alignItems: "center",
      justifyContent: "center", 
      alignSelf: "center", 
      width: 100, 
      height: 50, 
      borderRadius: 10, 
    }}
    onPress={props.avançarParaProximaPergunta}
  >
    <Text
      style={{
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000", 
      }}
    >
      Avançar
    </Text>
  </TouchableOpacity>
)}
    </View>
  )
}

const styles = StyleSheet.create({
  progresso: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  enunciado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto branco
    opacity: 0.5,
  },
})