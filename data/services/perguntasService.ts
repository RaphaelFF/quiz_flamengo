import axios from 'axios'

export const obterPerguntas = async () => {
    const response = await axios.get('https://raphaelff.github.io/quiz-flamengo-data/perguntas.json')
    const data = response.data

    // Verifica se o dado retornado é um array
    if (!Array.isArray(data)) {
        throw new Error('O formato do JSON não é válido. Esperado um array de perguntas.')
    }

    return data
}