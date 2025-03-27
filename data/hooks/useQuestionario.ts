import { useState, useEffect } from 'react'
import { obterPerguntas } from '@/data/services/perguntasService'

export default function useQuestionario() {
    const [indicePergunta, setIndicePergunta] = useState(0)
    const [respostas, setRespostas] = useState<number[]>([])
    const [perguntas, setPerguntas] = useState([]) // Inicializado como array vazio

    useEffect(() => {
        const carregarPerguntas = async () => {
            try {
                const perguntasDoJSON = await obterPerguntas()
                setPerguntas(perguntasDoJSON)
            } catch (error) {
                console.error('Erro ao carregar perguntas:', error)
            }
        }
        carregarPerguntas()
    }, [])

    return {
        get pergunta() {
            return perguntas[indicePergunta]
        },
        get pontuacao() {
            return perguntas
                .map((p) => p.resposta)
                .map((r, i) => r === respostas[i])
                .filter(Boolean).length
        },
        get totalDePerguntas() {
            return perguntas.length
        },
        get concluido() {
            return indicePergunta === perguntas.length
        },
        responder(resposta: number) {
            setRespostas([...respostas, resposta])
            setIndicePergunta(indicePergunta + 1)
        },
        reiniciar() {
            setIndicePergunta(0)
            setRespostas([])
        },
    }
}