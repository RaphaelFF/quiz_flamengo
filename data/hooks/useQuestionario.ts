import { useState, useEffect } from 'react'
import { obterPerguntas } from '@/data/services/perguntasService'

export default function useQuestionario() {
    const [indicePergunta, setIndicePergunta] = useState(0)
    const [respostas, setRespostas] = useState<number[]>([])
    const [perguntas, setPerguntas] = useState([]) // Inicializado como array vazio

    // Defina o número de perguntas por rodada
    const NUMERO_DE_PERGUNTAS = 2

    // Função para embaralhar e selecionar perguntas
    const embaralharPerguntas = async () => {
        try {
            const perguntasDoJSON = await obterPerguntas()
            console.log('Perguntas carregadas do JSON:', perguntasDoJSON) // Debug: Exibe as perguntas carregadas

            // Embaralha as perguntas e seleciona apenas a quantidade definida
            const perguntasAleatorias = perguntasDoJSON
                .sort(() => Math.random() - 0.5) // Embaralha as perguntas
                .slice(0, NUMERO_DE_PERGUNTAS) // Seleciona as primeiras N perguntas
            console.log('Perguntas selecionadas aleatoriamente:', perguntasAleatorias) // Debug: Exibe as perguntas selecionadas
            setPerguntas(perguntasAleatorias)
        } catch (error) {
            console.error('Erro ao carregar perguntas:', error)
        }
    }

    // Carrega as perguntas na inicialização
    useEffect(() => {
        embaralharPerguntas()
    }, [])

    return {
        get pergunta() {
            return perguntas[indicePergunta] || null // Retorna null se não houver pergunta
        },
        get pontuacao() {
            return perguntas
                .map((p) => p.resposta)
                .map((r, i) => r === respostas[i])
                .filter(Boolean).length
        },
        get totalDePerguntas() {
            return perguntas.length || 0 // Garante que seja 0 se perguntas estiver vazio
        },
        get concluido() {
            return indicePergunta >= perguntas.length
        },
        get indiceAtual() {
            return indicePergunta // Retorna o índice atual
        },
        responder(resposta: number) {
            setRespostas([...respostas, resposta])
            setIndicePergunta(indicePergunta + 1)
        },
        reiniciar() {
            setIndicePergunta(0)
            setRespostas([])
            embaralharPerguntas() // Recarrega perguntas aleatórias ao reiniciar
        },
    }
}