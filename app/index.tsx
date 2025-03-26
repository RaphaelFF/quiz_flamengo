import { View } from 'react-native'
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

    return (
        <Pagina>
            <View style={{ gap: 40 }}>
                <Logo />
                {concluido ? (
                    <Resultado
                        pontuacao={pontuacao}
                        totalDePerguntas={totalDePerguntas}
                        reiniciar={reiniciar}
                    />
                ) : (
                    <Pergunta
                        pergunta={pergunta}
                        opcaoSelecionada={responder}
                        progresso={progresso} // Passa o progresso
                    />
                )}
            </View>
        </Pagina>
    )
}