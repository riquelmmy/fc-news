import { SelectNoticias } from "../../app/lib/data";
import Card from "./Card";
import { Redis } from "@upstash/redis";

export default async function Feed() {
  const noticias = await SelectNoticias();

  const redis = Redis.fromEnv();

  const views = Object.fromEntries(
    await Promise.all(
      noticias.rows.map(async (p) => {
        const value = await redis.get(
          ["pageviews", "noticias", p.slug].join(":")
        );
        return [p.slug, value ? parseInt(value) : 0];
      })
    )
  );

  console.log(noticias.rows);
  return (
    <>
      <div className="container">
        <div className="w-full flex flex-wrap justify-center">
          {noticias.rows.map((noticia) => (
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
