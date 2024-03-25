import { sql } from "@vercel/postgres";

export function SelectNoticias() {
  return sql`SELECT *
               FROM noticias
               order by datacriada desc`;
}

export function SelectNoticiaBySlug(slug) {
  return sql`SELECT *
               FROM noticias
               WHERE slug = ${slug}`;
}

export async function InsertNoticia(noticia) {
  const tagExists = await sql`SELECT slug
                                FROM tags
                                WHERE nome = ${noticia.Tags}`;
  return sql`INSERT INTO noticias (Slug, Nome, Dono, Imagemlink, Descricao, Tags)
               VALUES (${noticia.Slug}, ${noticia.Nome}, ${noticia.Dono}, ${noticia.Imagemlink}, ${noticia.Descricao},
                       ${tagExists.rows[0].slug})`;
}

export function SelectTags() {
  return sql`SELECT *
               FROM tags`;
}

function InsertTag(tag) {
  return sql`INSERT INTO tags (Slug, Nome)
               VALUES (${tag.Slug}, ${tag.Nome})`;
}

function SelectTagBySlug(slug) {
  return sql`SELECT *
               FROM tags
               WHERE slug = ${slug}`;
}

function DeleteNoticiaBySlug(slug) {
  return sql`DELETE FROM noticias
               WHERE slug = ${slug}`;
}

export async function UpdateNoticiaBySlug(noticia) {
    const tagExists = await sql`SELECT slug
                                FROM tags
                                WHERE nome = ${noticia.Tags}`;
    console.log('noticia', noticia)
    return sql`UPDATE noticias
               SET Nome       = ${noticia.Nome},
                   Dono       = ${noticia.Dono},
                   Imagemlink = ${noticia.Imagemlink},
                   Descricao  = ${noticia.Descricao},
                   Tags       = ${tagExists},
                   Versao     = ${noticia.Versao}
               WHERE slug = ${noticia.Slug}`;
}

export function UpdateNoticiaAtivoBySlug(slug, ativo) {
    console.log('noticia', slug, ativo)
  return sql`UPDATE noticias
               SET ativo = ${ativo}
               WHERE slug = ${slug}`;
}

export function SelectNoticiasByTag(tag) {
  return sql`SELECT *
               FROM noticias
               WHERE tags = ${tag}`;
}

export function SelectNoticiasAtivo() {
    return sql`SELECT *
               FROM noticias
               WHERE ativo = true`;
}

export function SelectNoticiasInativo() {
    return sql`SELECT *
               FROM noticias
               WHERE ativo = false`;
}
