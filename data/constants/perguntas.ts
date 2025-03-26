import Pergunta from '@/data/model/Pergunta'

const perguntas: Pergunta[] = [
    {
        id: 1,
        enunciado: 'Em que ano o Flamengo conquistou seu primeiro título da Libertadores?',
        opcoes: ['1980', '1981', '1982', '1983'],
        resposta: 1, // 1981
    },
    {
        id: 2,
        enunciado: 'Qual jogador é o maior artilheiro da história do Flamengo?',
        opcoes: ['Zico', 'Romário', 'Adriano', 'Gabigol'],
        resposta: 0, // Zico
    },
    {
        id: 3,
        enunciado: 'Quantos títulos brasileiros o Flamengo conquistou até 2023?',
        opcoes: ['6', '7', '8', '9'],
        resposta: 3, // 9
    },
    
]

export default perguntas
