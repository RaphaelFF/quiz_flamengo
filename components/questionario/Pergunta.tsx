import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Enunciado from './Enunciado'
import Opcao from './Opcao'
import PerguntaModel from '@/data/model/Pergunta'

export interface PerguntaProps {
    pergunta: PerguntaModel
    opcaoSelecionada: (indice: number) => void
    progresso: string // Adiciona a propriedade de progresso (ex.: "1/10")
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <View style={{ gap: 25 }}>
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
                    />
                ))}
            </View>
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