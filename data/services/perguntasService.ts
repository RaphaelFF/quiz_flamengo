import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = 'https://blxwoqiaarfjnxodbftr.supabase.co'; // Substitua pela URL do seu projeto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJseHdvcWlhYXJmam54b2RiZnRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxOTQ5ODcsImV4cCI6MjA1ODc3MDk4N30.NEiyQZkVK7z1E8bjFTzDdSjwCQS2tP9FNfsWzJClypU'; // Substitua pela chave pública do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

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