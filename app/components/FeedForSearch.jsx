import { SelectNoticiasAtivo } from "../../app/lib/data";
import Card from "./Card";
import { Redis } from "@upstash/redis";

export default async function FeedForSearch({ query }) {
  const noticias = await SelectNoticiasAtivo();
  const redis = Redis.fromEnv();

  // Filtrando as notícias com base no termo de busca
  const filteredNoticias = noticias.rows.filter(
    (noticia) =>
      noticia.nome.toLowerCase().includes(query.toLowerCase()) ||
      noticia.descricao.toLowerCase().includes(query.toLowerCase()) ||
      noticia.datacriada.toString().includes(query)
  );

  const views = Object.fromEntries(
    await Promise.all(
      filteredNoticias.map(async (p) => {
        const value = await redis.get(
          ["pageviews", "noticias", p.slug].join(":")
        );
        return [p.slug, value ? parseInt(value) : 0];
      })
    )
  );

  return (
    <>
      <div className="container">
        <div className="w-full flex flex-wrap justify-center">
          {filteredNoticias.map((noticia) => (
            <Card
              key={noticia.slug}
              titulo={noticia.nome}
              descricao={noticia.descricao}
              tags={noticia.tags}
              views={views[noticia.slug] ?? 0}
              datacriada={noticia.datacriada}
              imgSrc={noticia.imagemlink}
              href={`/noticias/${noticia.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
