import NoticiaLayout from "../../../layout/NoticiaLayout";
import { SelectNoticiaBySlug } from "../../lib/data";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

import { notFound } from "next/navigation";

export default async function Noticias({ params }) {
  const noticias = await SelectNoticiaBySlug(params.slug);

  if (!noticias) {
    return notFound();
  }

  const views = await redis.mget(
    ["pageviews", "noticias", params.slug].join(":")
  );

  return (
    <>
      <div className="container">
        <div className="flex flex-col flex-wrap">
          {noticias.rows.map((noticia) => (
            <div key={noticia.slug}>
              <ReportView slug={noticia.slug} />
              <NoticiaLayout
                Nome={noticia.nome}
                Dono={noticia.dono}
                Tags={noticia.tags}
                Descricao={noticia.descricao}
                ImagemLink={noticia.imagemlink}
              />
            </div>
          ))}
          <div className="w-full flex justify-center">
            <h3 className="font-semibold mb-3">
              Essa página foi visualizada{" "}
              <span className="font-bold">{views}</span> vezes.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
