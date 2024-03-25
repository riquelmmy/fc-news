import {SelectNoticiaBySlug, UpdateNoticiaBySlug} from '../../lib/data';
import {NextResponse} from "next/server";
export async function PUT(request) {
    const noticia = await request.json();
    console.log('noticia', noticia)

    const noticiaantiga = await SelectNoticiaBySlug(noticia.Slug);
    noticia.versao = noticiaantiga.rows[0].versao + 1;
    if (noticia.versao === null || noticia.versao === undefined) {
        noticia.versao = 1;
    }

    if (noticia.Tags === '') {
        noticia.Tags = noticiaantiga.rows[0].tags;
    }
    if (noticia.Imagemlink === '') {
        noticia.Imagemlink = noticiaantiga.rows[0].imagemlink;
    }
    if (noticia.Nome === '') {
        noticia.Nome = noticiaantiga.rows[0].nome;
    }
    if (noticia.Descricao === '') {
        noticia.Descricao = noticiaantiga.rows[0].descricao;
    }

    try {
        const result = await UpdateNoticiaBySlug(noticia);
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}