import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '@env';

if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('As variáveis SUPABASE_URL e SUPABASE_KEY não estão definidas.');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const obterPerguntas = async () => {
    try {
        const { data, error } = await supabase
            .from('perguntas')
            .select('*');

        if (error) {
            console.error('Erro ao obter perguntas:', error);
            throw new Error('Erro ao acessar o Supabase.');
        }

        return data;
    } catch (error) {
        console.error('Erro ao obter perguntas:', error);
        throw new Error('Erro ao acessar o backend.');
    }
};