import { useState, useEffect } from 'react'
import { obterPerguntas } from '@/data/services/perguntasService'

export default function useQuestionario() {
    const [indicePergunta, setIndicePergunta] = useState(0)
    const [respostas, setRespostas] = useState<number[]>([])
    const [perguntas, setPerguntas] = useState([]) 
    
    const NUMERO_DE_PERGUNTAS = 2

    
    const embaralharPerguntas = async () => {
        try {
            const perguntasDoJSON = await obterPerguntas()
            console.log('Perguntas carregadas do JSON:', perguntasDoJSON) // Debug: Exibe as perguntas carregadas

            
            const perguntasAleatorias = perguntasDoJSON
                .sort(() => Math.random() - 0.5) 
                .slice(0, NUMERO_DE_PERGUNTAS) 
            console.log('Perguntas selecionadas aleatoriamente:', perguntasAleatorias) // Debug: Exibe as perguntas selecionadas
            setPerguntas(perguntasAleatorias)
        } catch (error) {
            console.error('Erro ao carregar perguntas:', error)
        }
    }

  
    useEffect(() => {
        embaralharPerguntas()
    }, [])

    return {
        get pergunta() {
            return perguntas[indicePergunta] || null 
        },
        get pontuacao() {
            return perguntas
                .map((p) => p.resposta)
                .map((r, i) => r === respostas[i])
                .filter(Boolean).length
        },
        get totalDePerguntas() {
            return perguntas.length || 0 
        },
        get concluido() {
            return indicePergunta >= perguntas.length
        },
        get indiceAtual() {
            return indicePergunta 
        },
        responder(resposta: number) {
            setRespostas([...respostas, resposta])
            setIndicePergunta(indicePergunta + 1)
        },
        reiniciar() {
            setIndicePergunta(0)
            setRespostas([])
            embaralharPerguntas() 
        },
    }
}