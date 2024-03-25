import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const result =
            await sql`CREATE TABLE tags (
                                                Slug varchar(255) PRIMARY KEY NOT NULL UNIQUE,
                                                Nome varchar(255) NOT NULL,
                                                DataCriada DATE DEFAULT CURRENT_DATE
                      );
            ;
            `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}