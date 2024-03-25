import {UpdateNoticiaAtivoBySlug} from '../../lib/data.js';
import {NextResponse} from "next/server";

export async function PUT(request){
    const noticia = await request.json();
    console.log('noticia', noticia);

    try {
        const result = await UpdateNoticiaAtivoBySlug(noticia.rows[0].slug, false);
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}