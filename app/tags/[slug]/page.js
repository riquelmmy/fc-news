import { SelectNoticiasByTag } from "../../lib/data";
import Card from "../../components/Card";
import { Redis } from "@upstash/redis";

export default async function Feed({ params }) {
  const noticias = await SelectNoticiasByTag(params.slug);
  console.log(noticias.rows);

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

  return (
    <>
      <div className="container">
        <div className="w-full h-6 flex flex-col justify-center my-4">
          <h1 className="self-center bg-gray-100 rounded-full px-4 py-1 text-2xl font-semibold ">
            {params.slug}
          </h1>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {noticias.rows.map((noticia) => (
            <Card
              key={noticia.slug}
              titulo={noticia.nome}
              descricao={noticia.descricao}
              tags={noticia.tags}
              views={views[noticia.slug] ?? 0}
              imgSrc={noticia.imagemlink}
              href={`/noticias/${noticia.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
