import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const result =
            await sql`CREATE TABLE auditoria_noticias (
                                                Id SERIAL PRIMARY KEY,
                                                SlugNoticia varchar(255),
                                                Nome varchar(255) NOT NULL,
                                                Dono varchar(255) NOT NULL,
                                                Imagemlink TEXT NOT NULL,
                                                Descricao TEXT NOT NULL,
                                                Ativo boolean DEFAULT true,
                                                Tags varchar(255) REFERENCES tags (Slug),
                                                Versao INT DEFAULT 1,
                                                DataModificada TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                      );
            ;
            `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
