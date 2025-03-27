import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export interface OpcaoProps {
  indice: number
  texto: string
  onPress: () => void
  selecionada: boolean
  correta: boolean
}

export default function Opcao(props: OpcaoProps) {
  const [isPressed, setIsPressed] = useState(false)

  // Determina a cor com base no índice (par: preto, ímpar: vermelho)
  const backgroundColor = props.indice % 2 === 0 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(rgba(0, 0, 0, 0.5))'
  const textColor = props.indice % 2 === 0 ? '#FFFFFF' : '#FFFFFF'
  const borderColor = props.indice % 2 === 0 ? '#FFFFFF' : '#FFFFFF'

  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor, borderColor },
        isPressed && styles.containerPressed,
        props.selecionada && styles.containerSelecionada,
        props.correta && styles.containerCorreta,
      ]}
      onPress={props.onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.texto, { color: textColor }]}>{props.texto}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
    borderWidth: 2,
  },
  containerPressed: {
    backgroundColor: 'rgba(166, 13, 37, 0.8)', // Fundo mais opaco ao pressionar
  },
  containerSelecionada: {
    backgroundColor: 'rgba(166, 13, 37, 0.8)', // Fundo verde ao selecionar
  },
  containerCorreta: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)', // Fundo azul para a resposta correta
  },
  textContainer: {
    // Nenhuma transparência aplicada aqui
  },
  texto: {
    fontSize: 23,
    fontWeight: 'bold',
  },
})