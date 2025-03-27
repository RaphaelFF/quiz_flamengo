import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity,  } from 'react-native'
import Logo from '@/components/template/Logo'
import Pagina from '@/components/template/Pagina'
import Pergunta from '@/components/questionario/Pergunta'
import useQuestionario from '@/data/hooks/useQuestionario'
import Resultado from '@/components/questionario/Resultado'

export default function Index() {
  const { pergunta, concluido, pontuacao, totalDePerguntas, responder, reiniciar, indiceAtual } =
    useQuestionario()

  // Calcula o progresso com base no índice atual
  const progresso = `${indiceAtual + 1}/${totalDePerguntas}`

  // Estado para armazenar a resposta do usuário
  const [respostaSelecionada, setRespostaSelecionada] = useState(null)
  const [mostrarRespostaCorreta, setMostrarRespostaCorreta] = useState(false)

  // Função para atualizar a resposta do usuário
  const atualizarResposta = (resposta) => {
    setRespostaSelecionada(resposta)
  }

  // Função para avançar para a próxima pergunta
  const avançarParaProximaPergunta = () => {
    if (respostaSelecionada !== null) {
      responder(respostaSelecionada)
      setRespostaSelecionada(null)
      setMostrarRespostaCorreta(false)
    }
  }

  // Função para mostrar a resposta correta
  const mostrarRespostaCorretaFuncao = () => {
    setMostrarRespostaCorreta(true)
  }

  return (
    <Pagina>
      <SafeAreaView style={{ gap: 40 }}>
        <Logo />
        {concluido ? (
          <Resultado
            pontuacao={pontuacao}
            totalDePerguntas={totalDePerguntas}
            reiniciar={reiniciar}
          />
        ) : (
          <View style={{ justifyContent: 'center', alignContent:'center', alignItems: 'center',}}>
            <Pergunta
              pergunta={pergunta}
              opcaoSelecionada={atualizarResposta}
              progresso={progresso}
              respostaSelecionada={respostaSelecionada}
              respostaCorreta={pergunta.resposta}
              mostrarRespostaCorreta={mostrarRespostaCorreta}
              avançarParaProximaPergunta={avançarParaProximaPergunta}
            />
            {respostaSelecionada !== null && !mostrarRespostaCorreta && (
              <TouchableOpacity  style={{ backgroundColor: "#FFFFFF", height: 50, marginTop: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', width: 100, borderRadius: 10}} onPress={mostrarRespostaCorretaFuncao}>
              <Text style={{ fontSize: 18, fontWeight: 'bold',  color:'#00000' }}>Confirmar</Text>
            </TouchableOpacity>
            )}
          </View>
        )}
      </SafeAreaView>
    </Pagina>
  )
}