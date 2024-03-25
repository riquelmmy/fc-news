import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export default async function GET(request) {
    try {
        const resultTags1 = await sql`INSERT INTO tags (Slug, Nome, DataCriada) VALUES ('tag1', 'Nome da Tag 1', CURRENT_DATE)`;
        const resultTags2 = await sql`INSERT INTO tags (Slug, Nome, DataCriada) VALUES ('tag2', 'Nome da Tag 2', CURRENT_DATE)`;

        const resultNoticias1 = await sql`INSERT INTO noticias (Slug, Nome, Dono, Imagemlink, Descricao, Ativo, Tags, Versao, DataCriada) VALUES ('noticia1', 'Nome da Notícia 1', 'Dono da Notícia 1', 'Link da Imagem 1', 'Descrição da Notícia 1 com markdown', true, 'tag1', 1, CURRENT_DATE)`;
        const resultNoticias2 = await sql`INSERT INTO noticias (Slug, Nome, Dono, Imagemlink, Descricao, Ativo, Tags, Versao, DataCriada) VALUES ('noticia2', 'Nome da Notícia 2', 'Dono da Notícia 2', 'Link da Imagem 2', 'Descrição da Notícia 2 com markdown', true, 'tag2', 1, CURRENT_DATE)`;

        return NextResponse.json({ result: [resultTags1, resultTags2, resultNoticias1, resultNoticias2] }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

